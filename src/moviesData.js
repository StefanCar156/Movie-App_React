const moviesData = [
    {
      id: "1",
      title: "John Wick",
      year: "2014",
      rating: "7.4",
      img: "https://images.pexels.com/photos/53351/firearm-handgun-revolver-gun-53351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Action",
      duration: "101",
      plot: "With the untimely death of his beloved wife still bitter in his mouth, John Wick, the expert former assassin, receives one final gift from her--a precious keepsake to help John find a new meaning in life now that she is gone. But when the arrogant Russian mob prince, Iosef Tarasov, and his men pay Wick a rather unwelcome visit to rob him of his prized 1969 Mustang and his wife's present, the legendary hitman will be forced to unearth his meticulously concealed identity."
    },
    {
      id: "2",
      title: "1917",
      year: "2019",
      rating: "8.3",
      img: "https://images.pexels.com/photos/876345/pexels-photo-876345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "War",
      duration: "119",
      plot: "April 1917, the Western Front. Two British soldiers are sent to deliver an urgent message to an isolated regiment. If the message is not received in time the regiment will walk into a trap and be massacred. To get to the regiment they will need to cross through enemy territory. Time is of the essence and the journey will be fraught with danger."
    },
    {
      id: "3",
      title: "Police Story",
      year: "1985",
      rating: "7.6",
      img: "https://images.pexels.com/photos/2348817/pexels-photo-2348817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Action",
      duration: "100",
      plot: "Kevin Chan (aka Jackie) is a Hong-Kong cop, who scores his first big hit by virtually single-handedly capturing and arresting a big drug- lord. Of course, the drug-lord isn't too happy about this, and frames Kevin with the murder of another cop (who happened to be on the take). Kevin has to clear his name, whilst keeping himself from getting killed or arrested, and keeping his girlfriend from leaving him."
    },
    {
      id: "4",
      title: "The Hurt Locker",
      year: "2008",
      rating: "7.6",
      img: "https://images.pexels.com/photos/264146/pexels-photo-264146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Drama",
      duration: "131",
      plot: "An intense portrayal of elite soldiers who have one of the most dangerous jobs in the world: disarming bombs in the heat of combat. When a new sergeant, James, takes over a highly trained bomb disposal team amidst violent conflict, he surprises his two subordinates, Sanborn and Eldridge, by recklessly plunging them into a deadly game of urban combat, behaving as if he's indifferent to death."
    },
    {
      id: "5",
      title: "Lone Survivor",
      year: "2013",
      rating: "7.5",
      img: "https://images.pexels.com/photos/3706666/pexels-photo-3706666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      genre: "War",
      duration: "121",
      plot: "Marcus Luttrell and his team set out on a mission to capture or kill notorious Taliban leader Ahmad Shah, in late June 2005. Marcus and his team are left to fight for their lives in one of the most valiant efforts of modern warfare."
    },
    {
      id: "6",
      title: "The Shawshank Redemption",
      year: "1994",
      rating: "9.3",
      img: "https://images.pexels.com/photos/4439590/pexels-photo-4439590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Drama",
      duration: "142",
      plot: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red."
    },
    {
      id: "7",
      title: "Interstellar",
      year: "2014",
      rating: "8.6",
      img: "https://images.pexels.com/photos/574115/pexels-photo-574115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Sci-Fi",
      duration: "169",
      plot: "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life."
    },
    {
      id: "8",
      title: "American Sniper",
      year: "2014",
      rating: "7.3",
      img: "https://images.pexels.com/photos/3706572/pexels-photo-3706572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "War",
      duration: "133",
      plot: "Chris Kyle (Bradley Cooper) was nothing more than a Texas man who dreamt of becoming a cowboy, but in his thirties he found out that maybe his life needed something different, something where he could express his real talent, something that could help America in its fight against terrorism. So he joined the S.E.A.L.s in order to become a sniper. After marrying Taya (Sienna Miller), Kyle and the other members of the team are called for their first tour of Iraq."
    },
    {
      id: "9",
      title: "Beverly Hills Cop",
      year: "1984",
      rating: "7.3",
      img: "https://images.pexels.com/photos/3023654/pexels-photo-3023654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Action",
      duration: "105",
      plot: "After the murder of his childhood friend in front of his eyes, the slick Detroit detective, Axel Foley, heads to sunny Beverly Hills, on a one-man mission to ferret out the killer and bring him to justice. Before long, Axel and his unorthodox methods unearth the lucrative drug operation of the powerful local crime kingpin, Victor Maitland; however, Foley, too, will find himself in deep trouble, as Lieutenant Andrew Bogomil wants him out of town."
    },
    {
      id: "10",
      title: "Million Dollar Baby",
      year: "2004",
      rating: "8.1",
      img: "https://images.pexels.com/photos/1608099/pexels-photo-1608099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Drama",
      duration: "132",
      plot: "Wanting to learn from the best, aspiring boxer Maggie Fitzgerald (Hilary Swank) wants Frankie Dunn (Clint Eastwood) to train her. At the outset, he flatly refuses saying he has no interest in training a girl. Frankie leads a lonely existence, alienated from his only daughter and having few friends. Maggie's rough around the edges, but shows a lot of grit in the ring and he eventually relents. Maggie not only proves to be the boxer he always dreamed of having under his wing, but a friend who fills the great void he's had in his life."
    },
    {
      id: "11",
      title: "Forest Gump",
      year: "1994",
      rating: "8.8",
      img: "https://images.pexels.com/photos/6037/nature-forest-trees-path.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Comedy",
      duration: "142",
      plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
    },
    {
      id: "12",
      title: "Kung Fu Panda",
      year: "2008",
      rating: "7.5",
      img: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Adventure",
      duration: "90",
      plot: "It's the story about a lazy, irreverent slacker panda, named Po, who is the biggest fan of Kung Fu around...which doesn't exactly come in handy while working every day in his family's noodle shop. Unexpectedly chosen to fulfill an ancient prophecy, Po's dreams become reality when he joins the world of Kung Fu and studies alongside his idols, the legendary Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- under the leadership of their guru, Master Shifu. But before they know it, the vengeful and treacherous snow leopard Tai Lung is headed their way, and it's up to Po to defend everyone from the oncoming threat."
    },
    {
      id: "13",
      title: "The Lion King",
      year: "2019",
      rating: "6.9",
      img: "https://images.pexels.com/photos/1912176/pexels-photo-1912176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Adventure",
      duration: "118",
      plot: "In Africa, the lion cub Simba is the pride and joy of his parents King Mufasa and Queen Sarabi. Mufasa prepares Simba to be the next king of the jungle. However, the naive Simba believes in his envious uncle Scar that wants to kill Mufasa and Simba to become the next king. He lures Simba and his friend Nala to go to a forbidden place and they are attacked by hyenas but they are rescued by Mufasa. Then Scar plots another scheme to kill Mufasa and Simba but the cub escapes alive and leaves the kingdom believing he was responsible for the death of his father."
    },
    {
      id: "14",
      title: "Rush",
      year: "2013",
      rating: "8.1",
      img: "https://images.pexels.com/photos/3806768/pexels-photo-3806768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Drama",
      duration: "123",
      plot: "Set against the sexy, glamorous golden age of Formula 1 racing in the 1970s, the film is based on the true story of a great sporting rivalry between handsome English playboy James Hunt (Hemsworth), and his methodical, brilliant opponent, Austrian driver Niki Lauda (Bruhl). The story follows their distinctly different personal styles on and off the track, their loves and the astonishing 1976 season in which both drivers were willing to risk everything to become world champion in a sport with no margin for error: if you make a mistake, you die."
    },
    {
      id: "15",
      title: "Snowden",
      year: "2016",
      rating: "7.3",
      img: "https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Drama",
      duration: "134",
      plot: "SNOWDEN stars Joseph Gordon-Levitt and is written and directed by Oliver Stone. The script is based on the books The Snowden Files: The Inside Story of the World's Most Wanted Man by Luke Harding and Time of the Octopus by Anatoly Kucherena."
    },
    {
      id: "16",
      title: "Southpaw",
      year: "2015",
      rating: "7.4",
      img: "https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Action",
      duration: "123",
      plot: "Billy Hope (played by Jake Gyllenhaal) is the undisputed light-heavyweight boxing champion of the world. He is unbeaten over a career of 43 fights. He is happily married to beautiful Maureen (Rachel McAdams) and has a young daughter, Leila (Oona Laurence). His life seems perfect, but then, during a fracas with a rival boxer, his wife is shot and killed. They had known each other since they were 12 years old, and now the bottom has fallen out of his world. The death of his wife sends Billy into a downward spiral, resulting in him being barred from professional boxing for a year, the loss of his house and almost all his possessions and, most painfully, the loss of his daughter to the custody of Social Services."
    },
    {
      id: "17",
      title: "The Last Samurai",
      year: "2003",
      rating: "7.7",
      img: "https://images.pexels.com/photos/1383766/pexels-photo-1383766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Drama",
      duration: "154",
      plot: "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle."
    },
    {
      id: "18",
      title: "Wall-E",
      year: "2008",
      rating: "8.4",
      img: "https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Animation",
      duration: "98",
      plot: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind."
    },
    {
      id: "19",
      title: "Transformers",
      year: "2007",
      rating: "7.0",
      img: "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Adventure",
      duration: "144",
      plot: "High-school student Sam Witwicky buys his first car, who is actually the Autobot Bumblebee. Bumblebee defends Sam and his girlfriend Mikaela Banes from the Decepticon Barricade, before the other Autobots arrive on Earth. They are searching for the Allspark, and the war on Earth heats up as the Decepticons attack a United States military base in Qatar."
    },
    {
      id: "20",
      title: "V for Vendetta",
      year: "2005",
      rating: "8.2",
      img: "https://images.pexels.com/photos/1554270/pexels-photo-1554270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Action",
      duration: "132",
      plot: "In the distant future, Evey Hammond is an average citizen of the United Kingdom, which is under the rule of the fascist and tyrannical Norsefire Party. She is an employee of the state-run British Television Network, but soon, she becomes the number one enemy of the state together with an enigmatic and larger-than-life freedom fighter known only by the letter V. V informs Evey that she must hide in his underground lair for at least one year, and while she is reluctant to the idea at first, a bond soon forms between the two individuals."
    },
    {
      id: "21",
      title: "Casino Royale",
      year: "2006",
      rating: "8.0",
      img: "https://images.pexels.com/photos/4380020/pexels-photo-4380020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Action",
      duration: "144",
      plot: "James Bond (Daniel Craig) goes on his first mission as a 00. Le Chiffre (Mads Mikkelsen) is a banker to the world's terrorists. He is participating in a poker game at Montenegro, where he must win back his money, in order to stay safe amongst the terrorist market. The boss of MI6, known simply as M (Dame Judi Dench) sends Bond, along with Vesper Lynd Eva Green) to attend this game and prevent Le Chiffre from winning. Bond, using help from Felix Leiter (Jeffrey Wright), Rene Mathis (Giancarlo Giannini), and having Vesper pose as his partner, enters the most important poker game in his already dangerous career."
    },
    {
      id: "22",
      title: "Joker",
      year: "2019",
      rating: "8.5",
      img: "https://images.pexels.com/photos/3078404/pexels-photo-3078404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Crime",
      duration: "122",
      plot: "Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. Over time these issues bear down on him, shaping his actions, making him ultimately take on the persona he is more known as...Joker."
    },
    {
      id: "23",
      title: "Titanic",
      year: "1997",
      rating: "7.8",
      img: "https://images.pexels.com/photos/2634269/pexels-photo-2634269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Drama",
      duration: "194",
      plot: "84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game."
    },
    {
      id: "24",
      title: "The Wolf of Wall Street",
      year: "2013",
      rating: "8.2",
      img: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Crime",
      duration: "180",
      plot: "In the early 1990s, Jordan Belfort teamed with his partner Donny Azoff and started brokerage firm Stratford-Oakmont. Their company quickly grows from a staff of 20 to a staff of more than 250 and their status in the trading community and Wall Street grows exponentially. So much that companies file their initial public offerings through them. As their status grows, so do the amount of substances they abuse, and so do their lies. They draw attention like no other, throwing lavish parties for their staff when they hit the jackpot on high trades."
    },
    {
      id: "25",
      title: "Baywatch",
      year: "2017",
      rating: "5.5",
      img: "https://images.pexels.com/photos/1756086/pexels-photo-1756086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Action",
      duration: "116",
      plot: "In sun-kissed Emerald Bay, the vigorous Lieutenant Mitch Buchannon and Baywatch, his elite team of hand-picked and perfectly tanned lifeguards, protect the bay, keeping both sunbathers and beach lovers safe. However, this summer, two new eager trainees will join the demanding life-saving program, as well as an insubordinate former Olympic swimmer, who are all called to prove their worth on the lifeguard towers just on time when a new synthetic street drug begins to infest the Emerald Bay: the flakka."
    },
    {
      id: "26",
      title: "Heat",
      year: "1995",
      rating: "8.2",
      img: "https://images.pexels.com/photos/54627/match-sticks-smoke-ignite-54627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Action",
      duration: "170",
      plot: "Hunters and their prey--Neil and his professional criminal crew hunt to score big money targets (banks, vaults, armored cars) and are, in turn, hunted by Lt. Vincent Hanna and his team of cops in the Robbery/Homicide police division. A botched job puts Hanna onto their trail while they regroup and try to put together one last big 'retirement' score. Neil and Vincent are similar in many ways, including their troubled personal lives. At a crucial moment in his life, Neil disobeys the dictum taught to him long ago by his criminal mentor."
    },
    {
      id: "27",
      title: "Now You See Me",
      year: "2013",
      rating: "7.3",
      img: "https://images.pexels.com/photos/5924041/pexels-photo-5924041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Thriller",
      duration: "116",
      plot: "Four magicians each answer a mysterious summons to an obscure address with secrets inside. A year later, they are the Four Horsemen, big time stage illusionists who climax their sold-out Las Vegas show with a bank apparently robbed for real. This puts F.B.I. Agents Dylan Rhodes and Interpol Agent Alma Dray on the case to find out how they did it. However, this mystery proves to be difficult to solve, even with the insights of professional illusion exposer Thaddeus Bradley. What follows is a bizarre investigation where nothing is what it seems to be, with illusions, dark secrets, and hidden agendas galore as all involved are reminded of a great truth in this puzzle: the closer you look, the less you see."
    },
    {
      id: "28",
      title: "The Transporter",
      year: "2002",
      rating: "6.8",
      img: "https://images.pexels.com/photos/3007436/pexels-photo-3007436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      genre: "Action",
      duration: "92",
      plot: "Ex-Special Forces operator Frank Martin lives what seems to be a quiet life along the French Mediterranean, hiring himself out as a mercenary transporter who moves goods--human or otherwise--from one place to another. No questions asked. Carrying out mysterious and sometimes dangerous tasks in his tricked-out BMW, Frank adheres to a strict set of rules, which he never breaks. Rule One: Never change the deal. Rule Two: No names--Frank doesn't want to know whom he's working for, or what he's transporting. Rule Three: never look in the package."
    },
];
  
export default moviesData;
  