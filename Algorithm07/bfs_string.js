function judge(c){
    var m = ["aa", "bb", "ababab"]
    for (var i = 0; i < m.length; i++){
        if (c.search(m[i])>= 0)
	    return true
    }
    return false
}

function bfs(){
    var queue = [""]
    var ans = []
    while (queue.length >= 1){
        var c = queue.shift()
        if (judge(c)){}
        else {
            ans.push(c)
            queue.push(c + "a")
            queue.push(c + "b")
        }
    }
    return ans
}

puts(bfs())
