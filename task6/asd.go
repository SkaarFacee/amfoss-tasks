// Asssume consumerKey,consumerSecret,accessToken,accessSecret are known.
package main

import (
    "github.com/dghubble/go-twitter/twitter"
    "github.com/dghubble/oauth1"
    "os"
    "flag"
    "fmt"
	
)

func main() {
    
	var idn string
	fmt.Println("Enter username")
    fmt.Scanln(&idn)
    k := flag.String("twitterHandle", idn , "twitter handle of a user")
    flag.Parse()
    config := oauth1.NewConfig("E3kS0lNBOyncdCsCPCnrR3e4b ", "kxuHkUXDH0Cf49OxYzTYGwrxiPsk6lELQwoMlDkH8TjM5xUmH3")
    token := oauth1.NewToken("1167786608021495809-bFgAGt5EThlod18Zg7PHSAKEtD8zUQ", "LguqayiKReq3cW1wlMsarplXZjkgH4npjSpUd4rhWYZ3E")
    httpClient := config.Client(oauth1.NoContext, token)
    client := twitter.NewClient(httpClient)
    f, err := os.Create("sample.txt")

    params := &twitter.FollowerListParams{
        ScreenName: *k,
    }
    
    followers, resp, err := client.Followers.List(params)
    var count int = 0;
    fmt.Println(resp, err)
    f.WriteString("Followers - " + *k)
    for _, follower := range followers.Users {
    count++
    f.WriteString(" Follower %d from the last 20 is \n" + follower.ScreenName)
    }
    f.WriteString("\n")
    f.WriteString(fmt.Sprintf("\n", count))
    f.Close()
}