function solve() {
  const kingdoms = [
    "CASTLE",
    "DUNGEON",
    "FORTRESS",
    "INFERNO",
    "NECROPOLIS",
    "RAMPART",
    "STRONGHOLD",
    "TOWER",
    "CONFLUX"
  ];

  const rebuild = () => {
    $("#kingdom div button").on("click", () => {
      const inputKingdomName = $("#kingdom div input:nth-child(1)")
        .val()
        .trim();
      const inputKingName = $("#kingdom div input:nth-child(2)")
        .val()
        .trim();
      if (
        !kingdoms.includes(inputKingdomName.toUpperCase()) ||
        inputKingName.length < 2
      ) {
        alert("nqma");
        return;
      }

      let kingdomDiv = $(`#${inputKingdomName.toLowerCase()}`);
      kingdomDiv.show();
      kingdomDiv.empty();
      let armyInfo = $("<fieldset>");
      armyInfo
        .append("<legend>Army</legend>")
        .append('<p class="tank">TANKS - 0</p>')
        .append('<p class="fighter">FIGHTERS - 0</p>')
        .append('<p class="mage">MAGES - 0</p>')
        .append('<div class="armyOutput">');
      kingdomDiv
        .append(`<h1>${inputKingdomName.toUpperCase()}<h1>`)
        .append(`<div class="castle"></div>`)
        .append(`<h2>${inputKingName.toUpperCase()}<h2>`)
        .append(armyInfo);
    });
  };

  const join = () => {
    $("#characters button").on("click", () => {
      const characterType = $("#characters input[type=radio]:checked").val();
      const characterName = $("#characters div:last input:first")
        .val()
        .trim();
      const kingdomName = $("#characters div:last input:last")
        .val()
        .trim();
      if (
        !characterType ||
        characterName.length < 2 ||
        !kingdoms.includes(kingdomName.toUpperCase())
      ) {
        return;
      }

      let kingdomDiv = $(`#${kingdomName.toLowerCase()}`);
      if (kingdomDiv.length <= 0) {
        return;
      }

      let characterTypeParagraph = kingdomDiv.find(
        `.${characterType.toLowerCase()}`
      );
      let characterTypesCount = +characterTypeParagraph.text().split(" - ")[1];
      characterTypeParagraph.text(
        `${characterType.toUpperCase()} - ${characterTypesCount + 1}`
      );
      let armyOutput = kingdomDiv.find(".armyOutput");
      armyOutput.text(`${armyOutput.text()} ${characterName}`);
    });
  };

  const war = () => {
    $("#actions button").on("click", () => {
      const firstWarior = $("#actions input:first")
        .val()
        .trim();
      const secondWaror = $("#actions input:last")
        .val()
        .trim();
      const attackerKingdom = $(`#${firstWarior.toLowerCase()}`);
      const defenderKingdom = $(`#${secondWaror.toLowerCase()}`);
      console.log(attackerKingdom);
      if (attackerKingdom.length <= 0 || defenderKingdom.length <= 0) {
        return;
      }

      const attackPoints = [20, 50, 70];
      const defensePoints = [80, 50, 30];
      let attackerKindomPoints = 0;
      let defenderKingdomPoints = 0;
      attackerKingdom
        .find("p")
        .each(
          (index, p) =>
            (attackerKindomPoints +=
              +p.innerHTML.split(" - ")[1] * attackPoints[index])
        );
      defenderKingdom
        .find("p")
        .each(
          (index, p) =>
            (defenderKingdomPoints +=
              +p.innerHTML.split(" - ")[1] * attackPoints[index])
        );

      if (attackerKindomPoints > defenderKingdomPoints) {
        defenderKingdom.find("h2").text(attackerKingdom.find("h2").text());
      }

      console.log(attackerKindomPoints);
      console.log(defenderKingdomPoints);
    });
  };

  rebuild();
  join();
  war();
}

solve();
