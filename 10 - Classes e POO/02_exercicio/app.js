class App {
    constructor() {
        this.spaceship = null;
    }

    start() 
    {
        let chosenOption
        do
        {
            chosenOption = this.showInitialMenu();
            this.redirectFeature(chosenOption);
        }
        while (chosenOption != "3");
        this.printAndExit();
    }

    enrollSpaceship() 
    {
        let spaceshipName = prompt("Nome da nave");
        let crewQuantity = prompt("Qtd trip");
        let spaceshipKind = this.askForSpaceshipKind();
        if (spaceshipKind == "1")
        {
            let weaponsQuantity = prompt("Armas");
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity);
        }
        else
        {
            let sitsQuantity = prompt("Assentos");
            this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity);
        }
    }

    askForSpaceshipKind()
    {
        let chosenOption
        while (!["1", "2"].includes(chosenOption)) {
            chosenOption = prompt("Qual a nave?");
        }
        return chosenOption;
    }

    showInitialMenu()
    {
        const promptMessage = "O que quer fazer? \n" +
        "1 - acelerar\n" +
        "2 - Trocar\n" +
        "3 - Sair";
        let chosenOption = prompt(promptMessage);
        while(!["1", "2", "3"].includes(chosenOption))
        {
            chosenOption = prompt(promptMessage);
        }
        return chosenOption;
    }

    redirectFeature(chosenOption)
    {
        switch(chosenOption)
        {
            case "1":
                this.accelerateSpaceship();
                break;
            case "2":
                this.enrollSpaceship();
                break;
        }
    }

    accelerateSpaceship()
    {
        let acceleration = Number(prompt("Insira aceleração"));
        this.spaceship.speedUp(acceleration);
    }

    printAndExit()
    {
        let finalMessage = "Nome: " + this.spaceship.name + "\n" +
        "qtd: " + this.spaceship.crewQuantity + "\n" +
        "Velo: " + this.spaceship.currentVelocity;
        document.write(finalMessage);
    }
}