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
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "ReactJs",
            "React Native",
            "Redux",
            "GraphQL",
            "NodeJs",
          ],
          medium: [
            "VueJs",
            "NativeScript",
            "Flutter",
            "Objective-C",
            "Swift",
            "Lua",
            "Unity"
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
          message: "Não cursei ensino superior"
        },
        socialProjects: [
          {
            name: "Missão Covid",
            description: "Voluntario no desenvolvimento das plataformas do Missão Covid que liga médicos voluntários a pacientes com sintomas da Covid-19."
          },
          {
            name: "Workshop Mobile Livia Teles",
            description: "Ministrei um curso de React Native em um Workshop que teve como objetivo arrecadar doações em dinheiro em forma da inscrição para os cursos, toda a quantia arrecadada foi voltada ao tratamento de Lívia Teles, uma bebezinha que tem uma doença chamada A.M.E."
          }
        ],
        experiences: [
          {
            name: "RandSoft Cloud Network",
            when: "02/2013 até 01/2015",
            role: "Web Developer"
          },
          {
            name: "Litoranea Transportes",
            when: "01/2016 até 10/2018",
            role: "Full Stack Developer"
          },
          {
            name: "Gok Digital",
            when: "10/2018 até agora",
            role: "Sênior Mobile Developer"
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
