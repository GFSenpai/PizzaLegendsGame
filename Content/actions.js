window.Actions = {
  damage1: {
    name: "Whomp!",
    description: "Ponche de massa folhada",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!"},
      { type: "animation", animation: "spin"},
      { type: "stateChange", damage: 10}
    ]
  },
  saucyStatus: {
    name: "Tomato Squeeze",
    description: "Aplica o status Saucy",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!"},
      { type: "stateChange", status: { type: "saucy", expiresIn: 3 } }
    ]
  },
  clumsyStatus: {
    name: "Olive Oil",
    description: "Bagunça escorregadia de delícias",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!"},
      { type: "animation", animation: "glob", color: "#dafd2a" },
      { type: "stateChange", status: { type: "clumsy", expiresIn: 3 } },
      { type: "textMessage", text: "{ALVO} está escorregando por toda parte!"},
    ]
  },
  //Items
  item_recoverStatus: {
    name: "Heating Lamp",
    description: "Sentindo-se fresco e quente",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} uses a {ACTION}!"},
      { type: "stateChange", status: null },
      { type: "textMessage", text: "Sentindo-se refrescado!", },
    ]
  },
  item_recoverHp: {
    name: "Parmesan",
    targetType: "friendly",
    success: [
      { type:"textMessage", text: "{RODÍZIO} borrifa em alguns {AÇÃO}!", },
      { type:"stateChange", recover: 10, },
      { type:"textMessage", text: "{RODÍZIO} recovers HP!", },
    ]
  },
}