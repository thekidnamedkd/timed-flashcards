export const exampleObject =
{
  cards: [
    {
      id: 0,
      definition: "Node Package Module",
      term: "NPM",
      faketerm: "JSON"
      //   {
      //     id: 200,
      //     definition: 'Not People Maker'
      //   },
      //   {
      //     id: 200,
      //     definition: 'Not People Maker'
      //   },
      //   {

      //   }
      // 
    },
    {
      id: 1,
      definition: "some definition 2",
      term: "name of the term"
    }
  ]
}

let response = "some HTTPS request call"


// exampleObject.terms[0].id <-- that would be 1
// exampleObject.terms[1].definition <-- "some definition 2"

// exampleObject.terms <--  [{
    //   id: 1,
    //   definition: "some definition",
    //   term: "name of the term"
    // },
    // {
    //   id: 2,
    //   definition: "some definition 2",
    //   term: "name of the term"
    // }]

// exampleObject.terms[0] <-- {
                            // id: 1,,
                            // faketerms: [
                            //   {

                            //   }
                            // ]
                            // definition: "some definition",
                            // term: "name of the term"
                            // },

// exampleObject.terms[0].id < -- returns the id of that index's object

//let variable =  exampleObject.terms[0].id