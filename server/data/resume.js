let resume = {
	objective: 'This is just a simple resume page I created to learn some new things - primarily VueJS, Docker (nginx-proxy and lets-encrypt-nginx-proxy-companion) The resume data is static but served via an independent nodejs api using express allowing consumption through vue via axios.\n\nArchitect of Enterprise LAMP/PHP SaaS including custom MVC with focus on flexible, scalable and portable solutions serving thousands of customers and millions of end users. Development experience in Node/Angularjs stack using express.js and MySQL. Integration with multiple third party APIs, Frameworks and Softwares for Application and User Interface/User Experience.\n\nTechnologies: MySQL, PHP (OOP - MVC - CLI), Javascript, NodeJS, Angularjs, JQuery, JSON, express.js, nwjs(node webkit), vuejs, socket.io, sequelize orm, Git, Bash, Docker, Redis, SSH, Linux (Redhat, CentOS, Debian, Ubuntu, etc), Apache, Subversion, Bitbucket, HTML, CSS, Nginx, pm2, apiDoc, Jasmine, TinyMCE, Authorize.net, Callfire, Perl, Python, Visual Basic, C#, WordPress, Drupal, SublimeText, xdebug, MobaXTerm, HeidiSQL, VirtualBox. mantisbt, redmine, bugtracker.net',
	skills: [{
		name: 'PHP',
		description: '15+ years of Object oriented PHP working with both custom and third party MVC frameworks including CakePHP and Laravel. CLI application development for parallel processing of massive amounts of data. Use of custom and third party template systems including smarty and blade. Integration of third party API/SDKs including authorize.net, callfire, etc via multiple web services including REST and SOAP.',
		years: '15'
	}, {
		name: 'Javascript / NodeJS',
		description: 'I am proficient in Javascript, Nodejs, JQuery, AngularJS and have studied other frameworks as well (This resume is written in VueJS). I have written some robust event driven front end applications in both pure javascript and jQuery as well as custom directives, services and controllers in AngularJS. I have also written web services and socket managers in NodeJS/express with sequelize and socket.io. I have experience coding with asynchronous design patterns utilizing callbacks, promises etc. ',
		years: '15'
	},{
		name: 'SQL (MySQL, Postgres etcSQL)',
		description: 'Experience working with different SQL servers primarily MySQL. Development of data models based on simple to complex SQL Queries. Experience working with both custom and third party ORMs. Experience analyzing and optimizing inefficient queries and configuring tables with optimal indexing. Able to install and optimize MySQL configurations and handle large data migrations.',
		years: '15'		
	},{
		name: 'HTML/CSS/Bootstrap',
		description: 'Experience working with HTML/CSS including bootstrap.  I hand code my html in sublime text with macro plugins like emmet for rapid prototyping of common html patterns',
		years:'20'
	},{
		name: 'Linux',
		description: 'I primarily develop in debian with deployment on debian servers in mind but I am proficient in multiple nix environments with Bash. Support services on Redhat, CentOS, Debian and FreeBSD. Experience installing, configuring and supporting many applications including but not limited to Apache, MySQL, sshd, iptables, NFS, dns/named, Exim, fail2ban, docker. Experience writing bash scripts for automation and configuration. Experience installing, configuring and supporting multiple xwindow systems including gnome, kde and xfce.',
		years:'15'
	},{
		name: 'Git',
		description: 'I use Git for source control in my current projects. My primary git interface is command line. Typical usage includes creating new branches for each feature / bug. Merging on completion and managing conflict resolutions before pushing to origin branches. I also know when and when not to rebase',
		years: '4'	
	}],

	experiences: [{
		company:'ATR', 
		city: 'Crystal River',
		state: 'Florida',
		start_month:'June',
		start_year:'2017',
		end_month:'',
		end_year:'',
		current: true,
		title:'Lead Developer',
		description:'Developer for proprietary internal queuing software in a Node / Angular stack. Migration of data from a legacy Microsoft Access environment to MySQL including analysis / porting of Visual Basic forms to Node and Angular. Created express.js middleware to handle custom group level API entitlements.  Created custom angular directives.  Wrote a Node Webkit (nw.js) app that allows seamless editing and saving of remote web files as if they were local files.  Wrote automation chat bot using node simple-xmpp. Designed deployment system using bash, Ngnix and pm2 to proxy web requests to multiple node applications running on different virtual domains.  Provide documentation for new and existing reusable code, modules and services in bitbucket snippets. Handle code reviews and merges of bug and feature branches in to master branches using git and bitbucket.',
	}, {
		company:'Enflyer', 
		city: 'Miami',
		state: 'Florida',
		start_month:'October',
		start_year:'2006',
		end_month:'',
		end_year:'',
		current: true,
		title:'Lead Developer',
		description:'Lead Developer and architect of SaaS Email Marketing system using LAMP/PHP. Performed code analysis, refactoring and maintenance of legacy email marketing software using FreeBSD, PHP, Perl and Python.  Development of front end user interface for managing email lists, email templates, and marketing campaigns.  Development of back end to handle scheduling,  queuing and sending of massive amounts of email via PHPMailer/SMTP/Exim.  Integration of custom billing system to Authorize.net.   Developed plugins for Wordpress and Drupal for easy email list integration.  Created easy to use CSS/JQuery based email editor allowing fast creation of robust templates by adding CSS classes to editable data types (text, html, images, colors). ',
	}, {
		company: 'TradeStation', 
		city: 'Miami', 
		state: 'Florida',
		start_month:'September',
		start_year:'1999',
		end_month:'',
		end_year:'2006',
		current:false,
		title:'QA Software Tester',
		description:'Tested TradeStation Stock Market Analysis Software. Managed multiple physical and virtual test  configurations for various hardware and operating system setups.  Implemented automated testing with Rational Visual Test scripts.  Wrote test applications in Visual Basic and C#.  Wrote technical analysis and automated trading scripts in TradeStation Easy-Language.  Won company \'Software Tester of the Year\' award for 2003.'

	}]
}

module.exports = resume;