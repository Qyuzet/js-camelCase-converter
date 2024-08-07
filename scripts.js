const textarea = document.createElement("textarea");
const button = document.createElement("button");

button.textContent = "submit";
let text = "";

document.body.append(textarea);
document.body.append(button);

const result = function (data) {
  let shard = data.split("_");
  let sharded = [];
  for (s of shard) {
    s = s.toLowerCase();

    if (!sharded[0]) {
      sharded.push(s.replace(s[0], s[0].toLowerCase()));
    } else {
      sharded.push(s.replace(s[0], s[0].toUpperCase()));
    }
  }

  let word = "";

  for (sh of sharded) {
    word += sh;
  }

  console.log(word);
};

button.addEventListener("click", function () {
  console.log(textarea.value);
  text = textarea.value;
  result(text);
});
