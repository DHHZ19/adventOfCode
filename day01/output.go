package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	file, err := os.ReadFile("input.txt")
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println(file)
}
