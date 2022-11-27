package main

func main() {
	s := "abcabcbb"

	lengthOfLongestSubstring(s)
}

func lengthOfLongestSubstring(s string) int {
	var max, left int
	m := make(map[byte]int)

	for idx, c := range []byte(s) {
		if _, okay := m[c]; okay == true && m[c] >= left {
			if idx-left > max {
				max = idx - left
			}
			left = m[c] + 1
		}
		m[c] = idx
	}
	if len(s)-left > max {
		max = len(s) - left
	}
	return max
}
