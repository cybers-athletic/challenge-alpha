package main

import (
	"fmt"
	"net/http"
	"text/template"
	"time"
)

var temp = template.Must(template.ParseGlob("templates/*html"))

func main() {
	http.HandleFunc("/", timeNow)
	http.ListenAndServe(":8000", nil)
}

func timeNow(w http.ResponseWriter, r *http.Request) {
	now := time.Now().Format("2006-01-02 15:04:05")
	fmt.Println("Horario Atual: ", now)
	temp.ExecuteTemplate(w, "Index", now)
}
