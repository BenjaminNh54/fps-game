// Configuration centralisée du jeu
const Config = {
  // Dimensions
  CANVAS_WIDTH: 1280,
  CANVAS_HEIGHT: 720,
  
  // Physique
  GRAVITY: 0.6,
  FRICTION: 0.85,
  JUMP_FORCE: 15,
  PLAYER_SPEED: 5,
  PLAYER_SIZE: 20,
  
  // Sniper
  SNIPER: {
    NAME: "Sniper",
    DAMAGE: 100,
    FIRE_RATE: 1000, // ms
    RELOAD_TIME: 2000,
    MAG_SIZE: 6,
    MAX_AMMO: 30,
    ZOOM_LEVELS: [1, 2, 3],
    BULLET_SPEED: 25,
    BULLET_SIZE: 3,
    MAX_DISTANCE: 2000,
    SCOPE_SIZE: 200
  },
  
  // Bots
  BOT: {
    COUNT: 3,
    SPEED: 4,
    HEALTH: 50,
    DETECTION_RANGE: 800,
    FIRE_RANGE: 500,
    REACTION_TIME: 500
  },
  
  // Map
  MAP: {
    BLOCK_SIZE: 40,
    SPAWN_POINTS: [
      { x: 100, y: 100 },
      { x: 400, y: 150 },
      { x: 800, y: 200 },
      { x: 1100, y: 100 }
    ]
  },
  
  // Rendu
  RENDER: {
    BG_COLOR: "#1a1a2e",
    BLOCK_COLOR: "#0f3460",
    GRID_COLOR: "#16213e",
    PLAYER_COLOR: "#00d4ff",
    BOT_COLOR: "#ff006e",
    TEXT_COLOR: "#ffffff"
  }
};

export default Config;