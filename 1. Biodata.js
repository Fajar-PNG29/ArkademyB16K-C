const Biodata = (name, age) => {
  return{
    name : name,
    age : age,
    address : "Surengede, Kertek, Wonosobo, Jawa Tengah",
    hobbies : ["Playing Game",
               "Watching Movie",
               "Coding"
              ],
    is_married : false,
    list_School : [
      {name : "SD N 1 Surengede",
       year_in : 2009,
       year_out : 2012,
       major : null
      },
      {name : "SDS Bina Bangsa 01",
       year_in : 2012,
       year_out : 2014,
       major : null
      },
      {name : "SMP N 1 Kalikajar",
       year_in : 2014,
       year_out : 2017,
       major : null
      },
      {name : "SMK N 1 Wonosobo",
       year_in : 2017,
       year_out : 2020,
       major : "Rekayasa Perangkat Lunak"
      },
    ],
    skills : [
      {name : "Android Game Developer Use Unity",
       level : "Beginner"
      },
      {name : "Web Developer",
       level : "Beginner"
      },
    ],
    interest_in_coding : true
  }
}

console.log(Biodata("Tri Fajar Pangestu",18))