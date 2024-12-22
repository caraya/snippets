// importing esm in esm
import messi from "./esm.mjs";

console.log(messi.name, messi.ability());

// importing cjs in esm
import darthVader from "./cjs.cjs";

console.log(darthVader.name, darthVader.ability());