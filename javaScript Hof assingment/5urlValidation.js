const regex = /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/i;
const url = "https://www.pwskills.com";

if (regex.test(url)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}