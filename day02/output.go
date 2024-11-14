package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

// 12 red cubes, 13 green cubes and 14 blue cubes
func main() {
	var slice []int
	result := 0
	colorMap := struct {
		red   int
		green int
		blue  int
	}{
		red:   12,
		green: 13,
		blue:  14,
	}
	f, _ := os.ReadFile("input.txt")

	arr := strings.Split(string(f), "\n")

	for i := 0; i < len(arr); i++ {
		// get game id
		tempGameId := strings.Split(arr[i], ":")
		gameID := strings.Split(tempGameId[0], " ")[1]

		game := strings.Split(arr[i], ":")[1]
		replaced := strings.ReplaceAll(game, ";", ",")
		splitR := strings.Split(replaced, ",")
		for j := 0; j < len(splitR); j++ {
			trimmed := strings.TrimSpace(splitR[j])
			gameActual := strings.Split(trimmed, " ")
			v, _ := strconv.Atoi(gameActual[0])
			gID, _ := strconv.Atoi(gameID)
			if gameActual[1] == "red" {
				if v <= colorMap.red {
					if j == len(splitR)-1 {
						slice = append(slice, gID)
					}
				} else {
					break
				}
			} else if gameActual[1] == "green" {
				if v <= colorMap.green {
					if j == len(splitR)-1 {
						slice = append(slice, gID)
					}
				} else {
					break
				}
			} else if gameActual[1] == "blue" {
				if v <= colorMap.blue {
					if j == len(splitR)-1 {
						slice = append(slice, gID)
					}
				} else {
					break
				}
			}
		}
	}

	for _, num := range slice {
		result += num
	}
	fmt.Println(result)
}
