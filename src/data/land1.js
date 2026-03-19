import { BiRotateLeft, BiRotateRight } from "react-icons/bi";

export const land1Data = {
  id: "land-1",
  title: "Scrooge’s Voyage of Fortune",
  subtitle: "Island 1 – The Island of First Fortune",
  seasonLabel: "Season March",
  resetText: "Resets in 18d 12h",
  currentST: 12400,
  nextCheckpointST: 15000,
  currentNode: 4,
  totalNodes: 10,

  activeReward: {
    node: 4,
    title: "25 Free Spins",
    description: "Claim this reward after reaching checkpoint 4.",
    cta: "Claim Reward",
    status: "claimable",
  },

  character: {
    currentNodeId: 1,
  },

  mapProps: [
    {
      id: "half-sun-top-left",
      type: "sunImage",
      x: 52,
      y: 12.3,
      width: 400,
      rotate: 0,
      z: 3,
      opacity: 0.5,
    },

    {
      id: "bag-left",
      type: "coinsBag",
      x: 12.5,
      y: 78.7,
      width: 60,
      rotate: -1,
      z: 3,
      animate: "sparkle",
      delay: "1.2s",
      shine: true,
      aura: true,
    },

    // {
    //   id: "chest-left",
    //   type: "chestOpen",
    //   x: 16.5,
    //   y: 69.5,
    //   width: 100,
    //   rotate: -4,
    //   z: 2,
    //   animate: "floatSlow",
    //   delay: "0.1s",
    //   shine: true,
    //   aura: true,
    // },

    // CODE BLOCK FOR CENTRAL CHEST BY THE FOUNTAIN SIDE

    // {
    //   id: "chest-near-5",
    //   type: "chestClosed",
    //   x: 67.5,
    //   y: 72.8,
    //   width: 100,
    //   rotate: 1,
    //   z: 2,
    //   animate: "floatSlow",
    //   delay: "0.1s",
    //   shine: true,
    //   aura: true,
    //   beam: true,
    //   beamWidth: "200%",
    //   beamHeight: "110%",
    //   beamBottom: "34%",
    //   beamOpacity: 1.9,
    //   beamCoreOpacity: 1.1,
    // },

    {
      id: "bottom-treasure-custom",
      type: "bottomTreasureCustom",
      x: 45.8,
      y: 80.8,
      width: 180,
      rotate: -2,
      z: 3,
      delay: "0.1s",
      shine: true,
      aura: true,
    },

    // {
    //   id: "centre-top-chest",
    //   type: "coinHeapCentreTop",
    //   x: 55.6,
    //   y: 43,
    //   width: 85,
    //   rotate: -4,
    //   z: 3,
    // },
    // {
    //   id: "coins-centre-top",
    //   type: "coinPile",
    //   x: 51,
    //   y: 46,
    //   width: 60,
    //   rotate: 8,
    //   z: 3,
    // },
    // {
    //   id: "coins-centre-top2",
    //   type: "coinPile",
    //   x: 53,
    //   y: 45,
    //   width: 60,
    //   rotate: 10,
    //   z: 2,
    // },
    // {
    //   id: "coins-centre-top3",
    //   type: "coinPile",
    //   x: 55,
    //   y: 47,
    //   width: 60,
    //   rotate: 10,
    //   z: 2,
    // },

    // {
    //   id: "coins-centre-top4",
    //   type: "coinPile",
    //   x: 57.4,
    //   y: 44,
    //   width: 60,
    //   rotate: 3,
    //   z: 1,
    // },
    // {
    //   id: "coins-centre-top5",
    //   type: "coinPile",
    //   x: 56.56,
    //   y: 49,
    //   width: 60,
    //   rotate: -2,
    //   z: 1,
    // },

    {
      id: "centre-top-heap-custom",
      type: "coinHeapCentreTop",
      x: 53,
      y: 45,
      width: 170,
      rotate: 3,
      z: 3,
    },

    {
      id: "blue-gems-right",
      type: "crystalBlue",
      x: 68.5,
      y: 62.2,
      width: 0,
      rotate: 3,
      z: 2,
      animate: "twinkle",
      delay: "0.8s",
    },

    {
      id: "fountain-coin-heap-custom",
      type: "coinHeapTopRight",
      x: 67.6,
      y: 65.2,
      width: 92,
      rotate: 2,
      z: 3,
      animate: "sparkle",
      delay: "1.2s",
    },

    {
      id: "blue-gems-right",
      type: "clusteredCrystals",
      x: 34.5,
      y: 65.9,
      width: 80,
      rotate: -10,
      z: 2,
      animate: "twinkle",
      delay: "0.8s",
    },

    {
      id: "bottom-right-coin-heap-custom",
      type: "coinHeapBottomRight",
      x: 88.2,
      y: 78,
      width: 122,
      rotate: 5,
      z: 3,
    },

    {
      id: "top-gems-near-gate",
      type: "crystalBlue",
      x: 51.5,
      y: 41.8,
      width: 0,
      rotate: 0,
      z: 2,
      animate: "twinkle",
      delay: "0.8s",
    },

    {
      id: "gate",
      type: "coinBigPile",
      x: 70.8,
      y: 38,
      width: 120,
      rotate: 2,
      z: 2,
    },

    {
      id: "gate2",
      type: "coinBigPile",
      x: 65.8,
      y: 38,
      width: 100,
      rotate: 2,
      z: 2,
    },

    {
      id: "top-right-coin-heap-custom",
      type: "coinHeapTopRight",
      x: 80.1,
      y: 53.3,
      width: 74,
      rotate: 10,
      z: 1,
    },
  ],

  // Final point after node 10 where the route should end near the gate entrance
  gatePoint: {
    x: 68,
    y: 37,
  },

  // These are NOT real nodes. They only shape the route.
  routeWaypoints: {
    // after node 9, bend on the green land before reaching 10
    after9Curve: {
      x: 85,
      y: 64,
    },

    // after node 10, go toward the stairs / lower approach
    after10StairsLower: {
      x: 65,
      y: 53,
    },

    // then take the upper turn near the stairs before the gate
    after10StairsUpper: {
      x: 70,
      y: 43,
    },
  },

  // Numeric values only, not "40%"
  nodes: [
    { id: 1, x: 16, y: 80, label: "1", state: "claimed", reward: "Starter Coins" },
    { id: 2, x: 24, y: 69, label: "2", state: "claimed", reward: "Treasure Chest" },
    { id: 3, x: 34, y: 72, label: "3", state: "claimed", reward: "Mystery Gem" },
    { id: 4, x: 43, y: 63, label: "4", state: "active", reward: "25 Free Spins" },
    { id: 5, x: 52, y: 58, label: "5", state: "locked", reward: "Treasure Chest" },
    { id: 6, x: 60, y: 64, label: "6", state: "locked", reward: "Coin Burst" },
    { id: 7, x: 61, y: 75, label: "7", state: "locked", reward: "Bonus Credits" },
    { id: 8, x: 74, y: 81, label: "8", state: "locked", reward: "Mystery Reward" },
    { id: 9, x: 83, y: 73, label: "9", state: "locked", reward: "Golden Key" },
    { id: 10, x: 76, y: 58, label: "10", state: "locked", reward: "Vault Key" },
  ],
};