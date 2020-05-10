{() => {
  const cv = {
    init() {
      this.createCV()
    },

    createCV() {
      const person = {
        name: "Julio Augusto Morais de Sousa",
        age: "27",
        isWorking: true,
        from: "Ferraz de Vasconcelos, São Paulo",
        skills: {
          hard: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "ReactJs",
            "React Native",
            "Redux",
            "VueJs",
            "NativeScript",
            "GraphQL",
            "NodeJs",
            "Lua",
          ],
          soft: [
            "Trabalho em equipe",
            "Colaboração",
            "Força de vontade",
            "Liderança",
            "Resiliência"
          ]
        },
        academics: {
          message: "Não deixe a faculdade atrapalhar seus estudos!"
        },
        experiences: [
          {
            name: "RandSoft Cloud Network",
            when: "02/2013 até 01/2015"
          },
          {
            name: "Passaro Marron",
            when: "01/2016 até 10/2018"
          },
          {
            name: "Gok Digital",
            when: "10/2018 até agora"
          }
        ]
      }

      console.log(person)
      console.info(`
        No momento não estou procurando novas oportunidades.
        Mais tem muitos conhecidos meus que estão, então basta me procurar para indicações!
      `)
    }
  }

  cv.init()
}}
