process.stdout.write('\033c');
var plus = "";
if (process.argv[2] === '--plus') plus = "+";
if (process.argv[2] === '--help') {
	console.log("RusherCrack 1.2");
	console.log("==================");
	console.log("--plus | Use Coro RusherCrack plus mode ay");
	process.exit(1);
}

console.log(`Initialize Cot ta sea Rushercrack${plus}...`);
console.log(`Once initialize hoi Rushercrack${plus}  exploit corbay Rusherhack${plus} ports.`);
console.log("Ay Process Ta First Time Err Zono Long Time Lag Bay");
setTimeout(crack, 4500);

// Logs to console in green text
function log(msg)
{
	console.log('\x1b[32m%s\x1b[0m', msg);
}

numPorts = 0;
function findPorts()
{
	setTimeout(function ()
	{
		log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
		
		numPorts++;
		if(numPorts < Math.floor( Math.random() * 150 + 1))
		{
			findPorts();
		}
		else
		{
			console.log("Found Exploit in port 666!");

			console.log("Injecting payload...");
			console.log("Please wait while we peform the injection...");
			setTimeout(injectPayload, 3000);
		}
	}, 500);
}

function injectPayload()
{
	setTimeout(function ()
	{
		log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
		
		injectPayload();
	}, 500);
}
	

function crack()
{
	console.log("Attempt Cot Ta Sea Vunerable Port Wait Coro");
	findPorts();
}
