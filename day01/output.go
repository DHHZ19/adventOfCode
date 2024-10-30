package main

import (
	"bufio"
	"fmt"
	valid "github.com/asaskevich/govalidator"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	f, err := os.Open("input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()

	scanner := bufio.NewScanner(f)
	var arr []int
	var result int
	for scanner.Scan() {
		fmt.Println(scanner.Text())

		charArr := strings.Split(scanner.Text(), "")
		var a []string

		for _, char := range charArr {
			if valid.IsInt(char) {
				a = append(a, char)
			}
		}

		if len(a) > 0 {
			if v, err := strconv.Atoi(a[0] + a[len(a)-1]); err == nil {
				arr = append(arr, v)
			}
		}

	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	for _, num := range arr {
		result += num
	}
	fmt.Println(result)
}
