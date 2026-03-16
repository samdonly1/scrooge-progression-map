import { useEffect, useMemo, useRef, useState } from "react";
import { land1Data } from "../data/land1";
import { createSmoothPath } from "../utils/createSmoothPath";
import CheckpointNode from "./CheckpointNode";
import RewardModal from "./RewardModal";
import land1Map from "../assets/maps/land1-placeholder.jpeg";
import MapProp from "./MapProp";
import MapCharacter from "./MapCharacter";

const MAX_NODE_ID = 10;
const TRAVEL_DURATION = 900;
const FALLBACK_MAP_SIZE = { width: 1600, height: 900 };

export default function VipMapPage() {
    const [selectedNode, setSelectedNode] = useState(null);
    const [isTravelling, setIsTravelling] = useState(false);
    const [travelFromNodeId, setTravelFromNodeId] = useState(null);
    const [travelToNodeId, setTravelToNodeId] = useState(null);
    const [mapSize, setMapSize] = useState(FALLBACK_MAP_SIZE);
    const [overlayRect, setOverlayRect] = useState({
        width: 0,
        height: 0,
        left: 0,
        top: 0,
    });

    const stageRef = useRef(null);

    useEffect(() => {
        const updateOverlayRect = () => {
            const stage = stageRef.current;
            if (!stage || !mapSize.width || !mapSize.height) return;

            const stageWidth = stage.clientWidth;
            const stageHeight = stage.clientHeight;

            if (!stageWidth || !stageHeight) return;

            const imageRatio = mapSize.width / mapSize.height;
            const stageRatio = stageWidth / stageHeight;

            let width = 0;
            let height = 0;
            let left = 0;
            let top = 0;

            if (stageRatio > imageRatio) {
                height = stageHeight;
                width = height * imageRatio;
                left = (stageWidth - width) / 2;
                top = 0;
            } else {
                width = stageWidth;
                height = width / imageRatio;
                left = 0;
                top = (stageHeight - height) / 2;
            }

            setOverlayRect({ width, height, left, top });
        };

        updateOverlayRect();

        const resizeObserver = new ResizeObserver(() => {
            updateOverlayRect();
        });

        if (stageRef.current) {
            resizeObserver.observe(stageRef.current);
        }

        window.addEventListener("resize", updateOverlayRect);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateOverlayRect);
        };
    }, [mapSize]);

    const handleMapLoad = (event) => {
        const { naturalWidth, naturalHeight } = event.currentTarget;

        if (!naturalWidth || !naturalHeight) return;

        setMapSize({
            width: naturalWidth,
            height: naturalHeight,
        });
    };

    const orderedNodes = useMemo(() => {
        return [...land1Data.nodes].sort((a, b) => a.id - b.id);
    }, []);

    const nodeById = useMemo(() => {
        return Object.fromEntries(orderedNodes.map((node) => [node.id, node]));
    }, [orderedNodes]);

    const [characterNodeId, setCharacterNodeId] = useState(
        land1Data.character.currentNodeId
    );

    const currentCharacterNode = useMemo(() => {
        return orderedNodes.find((node) => node.id === characterNodeId);
    }, [orderedNodes, characterNodeId]);

    const derivedNodes = useMemo(() => {
        return orderedNodes.map((node) => {
            let derivedState = "locked";

            if (node.id < characterNodeId) derivedState = "claimed";
            else if (node.id === characterNodeId) derivedState = "active";

            return {
                ...node,
                state: derivedState,
            };
        });
    }, [orderedNodes, characterNodeId]);

    const movePrev = () => {
        if (isTravelling) return;
        setCharacterNodeId((prev) => Math.max(1, prev - 1));
    };

    const moveNext = () => {
        if (isTravelling || characterNodeId >= MAX_NODE_ID) return;

        const fromId = characterNodeId;
        const toId = characterNodeId + 1;

        setIsTravelling(true);
        setTravelFromNodeId(fromId);
        setTravelToNodeId(toId);

        setTimeout(() => {
            setCharacterNodeId(toId);
            setIsTravelling(false);
            setTravelFromNodeId(null);
            setTravelToNodeId(null);
        }, TRAVEL_DURATION);
    };

    const fullRoutePoints = useMemo(() => {
        return [
            { x: nodeById[1].x, y: nodeById[1].y },
            { x: nodeById[2].x, y: nodeById[2].y },
            { x: nodeById[3].x, y: nodeById[3].y },
            { x: nodeById[4].x, y: nodeById[4].y },
            { x: nodeById[5].x, y: nodeById[5].y },
            { x: nodeById[6].x, y: nodeById[6].y },
            { x: nodeById[7].x, y: nodeById[7].y },
            { x: nodeById[8].x, y: nodeById[8].y },
            { x: nodeById[9].x, y: nodeById[9].y },
            {
                x: land1Data.routeWaypoints.after9Curve.x,
                y: land1Data.routeWaypoints.after9Curve.y,
            },
            { x: nodeById[10].x, y: nodeById[10].y },
            {
                x: land1Data.routeWaypoints.after10StairsLower.x,
                y: land1Data.routeWaypoints.after10StairsLower.y,
            },
            {
                x: land1Data.routeWaypoints.after10StairsUpper.x,
                y: land1Data.routeWaypoints.after10StairsUpper.y,
            },
            {
                x: land1Data.gatePoint.x,
                y: land1Data.gatePoint.y,
            },
        ];
    }, [nodeById]);

    const unlockedRoutePoints = useMemo(() => {
        const points = [];

        for (let i = 1; i <= characterNodeId; i++) {
            if (nodeById[i]) {
                points.push({
                    x: nodeById[i].x,
                    y: nodeById[i].y,
                });
            }
        }

        if (characterNodeId >= 9) {
            points.push({
                x: land1Data.routeWaypoints.after9Curve.x,
                y: land1Data.routeWaypoints.after9Curve.y,
            });
        }

        if (characterNodeId >= 10) {
            points.push({
                x: land1Data.routeWaypoints.after10StairsLower.x,
                y: land1Data.routeWaypoints.after10StairsLower.y,
            });
            points.push({
                x: land1Data.routeWaypoints.after10StairsUpper.x,
                y: land1Data.routeWaypoints.after10StairsUpper.y,
            });
            points.push({
                x: land1Data.gatePoint.x,
                y: land1Data.gatePoint.y,
            });
        }

        return points;
    }, [characterNodeId, nodeById]);

    const travelSegmentPoints = useMemo(() => {
        if (!travelFromNodeId || !travelToNodeId) return [];

        const fromNode = nodeById[travelFromNodeId];
        const toNode = nodeById[travelToNodeId];

        if (!fromNode || !toNode) return [];

        return [
            { x: fromNode.x, y: fromNode.y },
            { x: toNode.x, y: toNode.y },
        ];
    }, [travelFromNodeId, travelToNodeId, nodeById]);

    const fullPath = useMemo(() => {
        return createSmoothPath(fullRoutePoints, 1);
    }, [fullRoutePoints]);

    const unlockedPath = useMemo(() => {
        return createSmoothPath(unlockedRoutePoints, 1);
    }, [unlockedRoutePoints]);

    const travelPath = useMemo(() => {
        return createSmoothPath(travelSegmentPoints, 1);
    }, [travelSegmentPoints]);

    return (
        <div className="vip-page-shell">
            <div className="map-stage full-map-stage" ref={stageRef}>
                <img
                    src={land1Map}
                    alt="Land 1 tropical island map"
                    className="map-image full-map-image"
                    onLoad={handleMapLoad}
                />

                <div
                    className="map-overlay"
                    style={{
                        left: `${overlayRect.left}px`,
                        top: `${overlayRect.top}px`,
                        width: `${overlayRect.width}px`,
                        height: `${overlayRect.height}px`,
                    }}
                >
                    <div className="ocean-motion ocean-motion-1" />
                    <div className="ocean-motion ocean-motion-2" />
                    <div className="ocean-glow-sweep ocean-glow-sweep-1" />
                    <div className="ocean-glow-sweep ocean-glow-sweep-2" />

                    <div className="ambient-sunrise" />
                    <div className="ambient-birds birds-layer-1">
                        <span className="bird bird-1" />
                        <span className="bird bird-2" />
                        <span className="bird bird-3" />
                    </div>
                    <div className="ambient-birds birds-layer-2">
                        <span className="bird bird-4" />
                        <span className="bird bird-5" />
                    </div>

                    <div className="water-shimmer water-shimmer-1" />
                    <div className="water-shimmer water-shimmer-2" />
                    <div className="water-shimmer water-shimmer-3" />
                    <div className="water-shimmer water-shimmer-4" />

                    <div className="waterfall-flow waterfall-flow-1" />
                    <div className="waterfall-flow waterfall-flow-2" />
                    <div className="waterfall-flow waterfall-flow-3" />
                    <div className="waterfall-flow waterfall-flow-4" />

                    <div className="waterfall-mist waterfall-mist-1" />
                    <div className="waterfall-mist waterfall-mist-2" />

                    <div className="pond-ripple pond-ripple-top" />
                    <div className="pond-ripple pond-ripple-bottom" />

                    <div className="river-flow river-flow-1" />
                    <div className="river-flow river-flow-2" />

                    <div className="fountain-jet fountain-jet-1" />
                    <div className="fountain-jet fountain-jet-2" />
                    <div className="fountain-jet fountain-jet-3" />

                    <div className="fountain-glow fountain-glow-1" />
                    <div className="fountain-ripple fountain-ripple-1" />
                    <div className="fountain-ripple fountain-ripple-2" />
                    <div className="fountain-spark fountain-spark-1" />

                    <div className="map-light-overlay" />

                    <div className="map-banner">
                        <div className="map-banner-inner">
                            <h1>{land1Data.title}</h1>
                            <p>{land1Data.subtitle}</p>
                        </div>
                    </div>

                    <div className="gate-halo" />
                    <div className="level-pill">LEVEL 10</div>

                    <svg className="map-path" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path className="path-locked-underlay" d={fullPath} />
                        <path className="path-locked-main" d={fullPath} />

                        {unlockedPath && (
                            <>
                                <path className="path-underlay" d={unlockedPath} />
                                <path className="path-glow" d={unlockedPath} />
                                <path className="path-main" d={unlockedPath} />
                                <path className="path-outer" d={unlockedPath} />
                                <path className="path-core" d={unlockedPath} />
                            </>
                        )}

                        {travelPath && isTravelling && (
                            <>
                                <path className="path-travel-base" d={travelPath} />
                                <path className="path-travel-sweep" d={travelPath} />
                                <path className="path-travel-core" d={travelPath} />
                            </>
                        )}
                    </svg>

                    {land1Data.mapProps?.map((prop) => (
                        <MapProp key={prop.id} prop={prop} />
                    ))}

                    {derivedNodes.map((node) => (
                        <CheckpointNode
                            key={node.id}
                            node={node}
                            isReached={node.id <= characterNodeId}
                            onClick={setSelectedNode}
                        />
                    ))}

                    {currentCharacterNode && (
                        <MapCharacter x={currentCharacterNode.x} y={currentCharacterNode.y} />
                    )}
                </div>

                <div className="dev-controls">
                    <button onClick={movePrev} disabled={isTravelling}>
                        Prev
                    </button>
                    <button onClick={moveNext} disabled={isTravelling}>
                        Next
                    </button>
                </div>
            </div>

            <RewardModal node={selectedNode} onClose={() => setSelectedNode(null)} />
        </div>
    );
}