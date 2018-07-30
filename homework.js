// Episode 1

// Seeing as const. is block scoped, the expected output is the printed string telling us that Miss Scarlet is the murderer.


// Episode 2

// This throws an error because it is forbidden to reassign the value of a constant variable as it is constant by definition.


// Episode 3

// The murderer returned in the output is different in each case, since firstVerdict is assigned to the function declareMurderer(), within whose scope we find murderer reassigned to Mrs Peacock. In the second case the murderer is Professor Plum as this let statement sits at the same level as secondVerdict.

// Episode 4

// The first line of printed output cites Colonel Mustard as the third suspect, which is because suspectThree is reassigned to his name within the scope of the declareAllSuspects function. However, in the next line of output the third suspect is stated to be Mrs Peacock, to whom suspectThree is assigned at the beginning of the code block, hence at the same 'level' as the console.log statement.

// Episode 5

// This code is expected to bring back a sentence stating that the weapon is now the revolver. Even though const. was used, the mutable objects within it are not shielded from modification.

// Episode 6

// In this case the output names Mrs White as the murderer because the initial "let" call was situated above the initial function, allowing it to be scoped to the block.

// Episode 7

// Mr Green is declared to be the murderer, owing to the fact that the "let" within plotTwist is only accessible within its own {} block. Hence the invocation of plotTwist has no effect on the value of murderer.

// Episode 8

// The output cites Candle Stick as the murder weapon because unexpectedOutcome is called at the end of plotTwist, meaning that the murderer is changed from Mrs. Peacock to Colonel Mustard.

// Episode 9

// Professor Plum is the returned output, as Mrs Peacock is declared as a "let" and as such only exists within the scope of its own code block inside the if statement.
