const quotes = [  
   {  
      name:"The only people who never fail are those who never try.",
      quote:"Ilka Chase"
   },
   {  
      name:"Failure is just another way to learn how to do something right.",
      quote:"Marian Wright Edelman"
   },
   {  
      name:"I failed my way to success.",
      quote:"Thomas Edison"
   },
   {  
      name:"Every failure brings with it the seed of an equivalent success.",
      quote:"Napoleon Hill"
   },
   {  
      name:"Only those who dare to fail greatly can ever achieve greatly.",
      quote:"John F. Kennedy"
   },
   {  
      name:"It is hard to fail, but it is worse never to have tried to succeed.",
      quote:"Theodore Roosevelt"
   },
   {  
      name:"Imagination is more important than knowledge.",
      quote:"Albert Einstein"
   },
   {  
      name:"Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.",
      quote:"Langston Hughes"
   },
   {  
      name:"The future belongs to those who believe in the beauty of their dreams.",
      quote:"Eleanor Roosevelt"
   },
   {  
      name:"Go confidently in the direction of your dreams. Live the life you have imagined.",
      quote:"Henry David Thoreau"
   },
   {  
      name:"You cannot depend on your eyes when your imagination is out of focus.",
      quote:"Mark Twain"
   },
   {  
      name:"Commitment leads to action. Action brings your dream closer.",
      quote:"Marcia Wieder"
   },
   {  
      name:"I never think of the future",
      quote:"it comes soon enough.\""
   },
   {  
      name:"Don't waste your life in doubts and fears: Spend yourself on the work before you, well assured that the right performance of this hour's duties will be the best preparation for the hours or ages that follow it.",
      quote:"Ralph Waldo Emerson"
   },
   {  
      name:"Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.",
      quote:"Benjamin Franklin"
   },
   {  
      name:"Take time to deliberate; but when the time for action arrives, stop thinking and go in.",
      quote:"Andrew Jackson"
   },
   {  
      name:"The mind that is anxious about future events is miserable.",
      quote:"Seneca"
   },
   {  
      name:"Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influences of each.",
      quote:"Henry David Thoreau"
   },
   {  
      name:"The art of leadership is saying no, not yes. It is very easy to say yes.",
      quote:"Tony Blair"
   },
   {  
      name:"A leader is a dealer in hope.",
      quote:"Napoleon Bonaparte"
   },
   {  
      name:"While a good leader sustains momentum, a great leader increases it.",
      quote:"John C. Maxwell"
   },
   {  
      name:"A general is just as good or just as bad as the troops under his command make him.",
      quote:"General Douglas MacArthur"
   },
   {  
      name:"To do great things is difficult; but to command great things is more difficult.",
      quote:"Friedrich Nietzsche"
   },
   {  
      name:"Leadership does not always wear the harness of compromise.",
      quote:"Woodrow Wilson"
   },
   {  
      name:"Business opportunities are like buses",
      quote:"there's always another one coming.\""
   },
   {  
      name:"I avoid looking forward or backward, and try to keep looking upward.",
      quote:"Charlotte Bronte"
   },
   {  
      name:"The more difficulties one has to encounter, within and without, the more significant and the higher in inspiration his life will be.",
      quote:"Horace Bushnell"
   },
   {  
      name:"Every artist was first an amateur.",
      quote:"Ralph Waldo Emerson"
   },
   {  
      name:"I was always looking outside myself for strength and confidence, but it comes from within. It is there all of the time.",
      quote:"Anna Freud"
   },
   {  
      name:"We can do anything we want to do if we stick to it long enough.",
      quote:"Helen Keller"
   },
   {  
      name:"Our business in life is not to get ahead of others, but to get ahead of ourselves.",
      quote:"E. Joseph Cossman"
   },
   {  
      name:"Insist on yourself. Never imitate.",
      quote:"Ralph Waldo Emerson"
   },
   {  
      name:"Who looks outside, dreams. Who looks inside, awakes.",
      quote:"Carl Jung"
   },
   {  
      name:"It is not easy to find happiness in ourselves, and it is not possible to find it elsewhere.",
      quote:"Agnes Repplier"
   },
   {  
      name:"The only journey is the one within.",
      quote:"Rainer Maria Rilke"
   },
   {  
      name:"Follow your honest convictions, and stay strong.",
      quote:"William Thackeray"
   },
   {  
      name:"The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.",
      quote:"Marcus Aurelius"
   },
   {  
      name:"Action may not always bring happiness; but there is no happiness without action.",
      quote:"Benjamin Disraeli"
   },
   {  
      name:"Happiness depends more on the inward disposition of mind than on outward circumstances.",
      quote:"Benjamin Franklin"
   },
   {  
      name:"There is no happiness except in the realization that we have accomplished something.",
      quote:"Henry Ford"
   },
   {  
      name:"Happiness is not a goal, but a by-product.",
      quote:"Eleanor Roosevelt"
   },
   {  
      name:"Happiness is not a state to arrive at, but a manner of traveling.",
      quote:"Margaret Lee Runbeck"
   },
   {  
      name:"Purpose is what gives life a meaning.",
      quote:"C. H. Parkhurst"
   },
   {  
      name:"The significance of a man is not in what he attains but in what he longs to attain.",
      quote:"Kahlil Gibran"
   },
   {  
      name:"In all things that you do, consider the end.",
      quote:"Solon"
   },
   {  
      name:"Life can be pulled by goals just as surely as it can be pushed by drives.",
      quote:"Viktor Frankl"
   },
   {  
      name:"The virtue lies in the struggle, not in the prize.",
      quote:"Richard Monckton Milnes"
   },
   {  
      name:"To reach a port, we must sail",
      quote:"sail, not tie at anchor"
   },
   {  
      name:"Success is the child of audacity.",
      quote:"Benjamin Disraeli"
   },
   {  
      name:"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
      quote:"Vince Lombardi"
   },
   {  
      name:"The secret of success is to know something nobody else knows.",
      quote:"Aristotle Onassis"
   },
   {  
      name:"The surest way not to fail is to determine to succeed.",
      quote:"Richard Brinsley Sheridan"
   },
   {  
      name:"I cannot give you the formula for success, but I can give you the formula for failure",
      quote:"which is: Try to please everybody.\""
   },
   {  
      name:"Careful thinking and hard work will solve nearly all your problems. Try and see for yourself.",
      quote:"Ullery"
   },
   {  
      name:"Years teach us more than books.",
      quote:"Berthold Auerbach"
   },
   {  
      name:"The only medicine for suffering, crime, and all the other woes of mankind, is wisdom.",
      quote:"Thomas Huxley"
   },
   {  
      name:"The art of being wise is knowing what to overlook.",
      quote:"William James"
   },
   {  
      name:"The great lesson is that the sacred is in the ordinary, that it is to be found in one's daily life, in one's neighbors, friends and family, in one's backyard.",
      quote:"Abraham Maslow"
   },
   {  
      name:"A wise man learns by the mistakes of others, a fool by his own.",
      quote:"Latin proverb"
   },
   {  
      name:"No man was ever wise by chance.",
      quote:"Seneca"
   },
   {  
      name:"In everything the ends well defined are the secret of durable success.",
      quote:"Victor Cousins"
   },
   {  
      name:"Arriving at one goal is the starting point to another.",
      quote:"John Dewey"
   },
   {  
      name:"A goal is a dream with a deadline.",
      quote:"Napoleon Hill"
   },
   {  
      name:"Most 'impossible' goals can be met simply by breaking them down into bite-size chunks, writing them down, believing them, and then going full speed ahead as if they were routine.",
      quote:"Don Lancaster"
   },
   {  
      name:"Goals are the fuel in the furnace of achievement.",
      quote:"Brian Tracy"
   },
   {  
      name:"We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
      quote:"Aristotle"
   },
   {  
      name:"Take risks and you'll get the payoffs. Learn from your mistakes until you succeed. It's that simple.",
      quote:"Bobby Flay"
   },
   {  
      name:"The best way out is always through.",
      quote:"Robert Frost"
   },
   {  
      name:"You miss 100 percent of the shots you don't take.",
      quote:"Wayne Gretzky"
   },
   {  
      name:"Nothing will ever be attempted if all possible objections must first be overcome.",
      quote:"Samuel Johnson"
   },
   {  
      name:"Don't bunt. Aim out of the ballpark.",
      quote:"David Ogilvy"
   },
   {  
      name:"“The critical ingredient is getting off your butt and doing something. It’s as simple as that. A lot of people have ideas, but there are few who decide to do something about them now. Not tomorrow. Not next week. But today. The true entrepreneur is a doer, not a dreamer.”",
      quote:"Nolan Bushnell, entrepreneur."
   },
   {  
      name:"“Never give in",
      quote:"never, never, never, never, in nothing great or small, large or petty, never give in except to convictions of honour and good sense. Never yield to force; never yield to the apparently overwhelming might of the enemy.” - Winston Churchill, British Prime Minister."
   },
   {  
      name:"Your most unhappy customers are your greatest source of learning.",
      quote:"Bill Gates, co-founder of Microsoft."
   },
   {  
      name:"I have not failed. I’ve just found 10,000 ways that won’t work.",
      quote:"Thomas Edison, inventor."
   },
   {  
      name:"Entrepreneurship is neither a science nor an art. It is a practice.",
      quote:"Peter Drucker, management consultant, educator, and author."
   },
   {  
      name:"In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.",
      quote:"David Ogilvy, co-founder of Ogilvy & Mather."
   },
   {  
      name:"Success is how high you bounce after you hit bottom.",
      quote:"General George Patton."
   },
   {  
      name:"“If you’re not embarrassed by the first version of your product, you’ve launched too late.”",
      quote:"Reid Hoffman, co-founder of LinkedIn."
   },
   {  
      name:"Positive thinking will let you do everything better than negative thinking will.",
      quote:"Zig Ziglar, author, salesman, and motivational speaker."
   },
   {  
      name:"“I’m not afraid of dying, I’m afraid of not trying.”",
      quote:"Jay Z, musician."
   },
   {  
      name:"Whatever the mind can conceive and believe, the mind can achieve.",
      quote:"Dr. Napoleon Hill, author of Think and Grow Rich."
   },
   {  
      name:"The longer you’re not taking action the more money you’re losing",
      quote:"Carrie Wilkerson"
   },
   {  
      name:"If you live for weekends or vacations, your shit is broken",
      quote:"Gary Vaynerchuk"
   },
   {  
      name:"Go Big, or Go Home",
      quote:"Eliza Dushku"
   },
   {  
      name:"Most great people have attained their greatest success just one step beyond their greatest failure",
      quote:"Napoleon Hill"
   },
   {  
      name:"Opportunity is missed by most people because it is dressed in overalls and looks like work",
      quote:"Thomas Edison"
   },
   {  
      name:"Have the end in mind and every day make sure your working towards it",
      quote:"Ryan Allis"
   },
   {  
      name:"He who begins many things finishes but few",
      quote:"German Proverb"
   },
   {  
      name:"The best use of life is to spend it for something that outlasts it",
      quote:"William James"
   },
   {  
      name:"If you think education is expensive, try ignorance",
      quote:"Derek Bok"
   },
   {  
      name:"Entrepreneurship is living a few years of your life like most people wont so you can spend the rest of your life like most people can’t",
      quote:"A student in Warren G. Tracy’s class"
   },
   {  
      name:"Lend your friend $20, if he doesn’t pay you back then he’s not your friend. Money well spent",
      quote:"Ted Nicolas"
   },
   {  
      name:"Be nice to geek’s, you’ll probably end up working for one",
      quote:"Bill Gates"
   },
   {  
      name:"To never forget that the most important thing in life is the quality of life we lead",
      quote:"Quoted by Tony Hsieh on Retireat21"
   },
   {  
      name:"Its better to own the racecourse then the race horse",
      quote:"Unknown"
   },
   {  
      name:"When you go to buy, don’t show your silver",
      quote:"Chinese Proverb"
   },
   {  
      name:"It’s easier to ask forgiveness than it is to get permission",
      quote:"Grace Hopper"
   },
   {  
      name:"To win without risk is to triumph without glory",
      quote:"Corneille"
   },
   {  
      name:"Example is not the main thing in influencing other people; it’s the only thing",
      quote:"Abraham Lincoln"
   },
   {  
      name:"Associate yourself with people of good quality, for it is better to be alone than in bad company",
      quote:"Booker T. Washington"
   },
   {  
      name:"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great",
      quote:"Mark Twain"
   },
   {  
      name:"There is only one success",
      quote:"to be able to spend your life in your own way"
   },
   {  
      name:"You don’t buy a nice car and get rich you get rich and buy a nice car",
      quote:"Unknown"
   },
   {  
      name:"Fall seven times, stand up eight",
      quote:"Japanese Proverb"
   },
   {  
      name:"One day your life will flash before your eyes. Make sure it is worth watching",
      quote:"Mooie"
   },
 
]

const quoteBtn = document.querySelector('#quoteBtn');

const quoteAuthor = document.querySelector('#quoteAuthor');

const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){

   let numbers = Math.floor(Math.random()*quotes.length);
   quoteAuthor.innerHTML = quotes[numbers].name;
   quote.innerHTML = quotes[numbers].quote;
}