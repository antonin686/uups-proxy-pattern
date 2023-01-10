const { exec } = require("child_process");
const version = process.argv[2];
const network = process.argv[3] ?? 'goerli' ;

// exec(`npx hardhat run --network goerli ./scripts/deploy_v${version}.ts`)
exec(`npx hardhat run --network ${network} ./scripts/deploy_${version}.ts`, function (err, stdout, stderr) {
  if (err) {
    console.log(stderr);
  }
  console.log(stdout);
});
