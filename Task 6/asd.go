// Asssume consumerKey,consumerSecret,accessToken,accessSecret are known.
package main

import {"fmt"
	"github.com/dghubble/go-twitter/twitter"
    	"github.com/dghubble/oauth1"
	"os"
}
func main(){
config := oauth1.NewConfig("consumerKey", "consumerSecret")
token := oauth1.NewToken("accessToken", "accessSecret")
httpClient := config.Client(oauth1.NoContext, token)

// Status Show
tweet, resp, err := client.Statuses.Show(585613041028431872, nil)

// Search Tweets
search, resp, err := client.Search.Tweets(&twitter.SearchTweetParams{
    Query: "gopher",
})

// User Show
user, resp, err := client.Users.Show(&twitter.UserShowParams{
    ScreenName: "dghubble",
})

// Followers
followers, resp, err := client.Followers.List(&twitter.FollowerListParams{})
}
