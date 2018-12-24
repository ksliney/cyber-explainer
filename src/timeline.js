milestones('#timeline')
          .mapping({
            'timestamp': 'year',
            'text': 'title'
          })
          .parseTime('%Y')
          .aggregateBy('year')
          .render([
            { year: 2005, title: '🐻🇷🇺Russian-sponsored "Crouching Yeti" targets employees of U.S. power plants' },
            { year: 2006, title: '🐼🇨🇳China targets the U.S. Naval War College' },
            { year: 2006, title: '🐼🇨🇳China probes the Pentagon non-classified network' },
            { year: 2006, title: '🐼🇨🇳China <a href="https://www.cbsnews.com/news/state-department-computers-hacked/">targets State Department</a> Bureau of East Asian and Pacific Affairs computers' },
            { year: 2007, title: '🐼🇨🇳The PLA penetrates unclassified email at office of Defense Secretary Robert Gates' },
            { year: 2008, title: '🐼🇨🇳China infiltrates McCain and Obama campaign aide&#39;s emails' },
            { year: 2009, title: '🐼🇨🇳China&#39;s "Sneaky Panda" is believed to be behind attacks on computers with information on the U.S. Air Force&#39;s Joint Strike Fighter' },
            { year: 2008, title: '🐼🇨🇳China&#39;s compromises computers at NASA' },
            { year: 2009, title: '🐼🇨🇳Chinese Hackers target 3 staffers at the office of Sen. Bill Nelson (D-FL)' },
            { year: 2010, title: '🐼🇨🇳China&#39;s "Night Dragon" <a href="https://www.wired.com/2010/01/hack-for-oil/">targets US oil industry</a> for oil-location data' },
            { year: 2011, title: '🐼🇨🇳PLA Unit 61398 attacks defense contractors and think tanks with Shady RAT tool'},
            { year: 2011, title: '🐼🇨🇳China <a href="https://www.wired.com/2011/04/oak-ridge-lab-hack/">exfiltrates data</a> from U.S. Department of Energy&#39;s Oak Ridge National Laboratory' },
            { year: 2012, title: '😸🇮🇷Iran <a href="https://www.nytimes.com/2013/01/09/technology/online-banking-attacks-were-work-of-iran-us-officials-say.html">attacks</a> US Banks' },
            { year: 2014, title: '🐼🇨🇳China targets Apple’s iCloud service in China' },
            { year: 2014, title: '🐴🇰🇵North Korea&#39;s Lazarus Group <a href="https://www.wired.com/2014/12/sony-hack-what-we-know/">Attacks Sony Pictures Entertainment</a>' },
            { year: 2017, title: '🐴🇰🇵North Korea targets US electrical companies' },
            { year: 2018, title: '🐼🇨🇳China conducts network reconnaissance against organizations with trade ties to China' },
            { year: 2014, title: '🐼🇨🇳China&#39;s "Deep Panda" hacks U.S. Office of Personnel Management' },
            { year: 2015, title: '🐼🇨🇳China&#39;s "Deep Panda" <a href="https://thehill.com/policy/cybersecurity/249601-opm-hackers-may-have-hit-united-airlines-as-well">hacks</a> United Airlines' },
          ]);