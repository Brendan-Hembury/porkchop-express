var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=3172df69-525d-4254-8000-42a54252f39c"

$.ajax({
	url: queryUrl,
	method: "GET"
}).then(function (response) {
	confirm.log(response)
}
)