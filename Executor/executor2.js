function draw_line(a,b){postMessage("+g1"+JSON.stringify([a,b]))}function draw_rect(a,b){postMessage("+g2"+JSON.stringify([a,b]))}function draw_triangle(a,b,c){postMessage("+g3"+JSON.stringify([a,b,c]))}function draw_triangle_w(a,b,c){postMessage("+g4"+JSON.stringify([a,b,c]))}function cls(){postMessage("+g0")}var puts=function(a){postMessage("++"+a)},foo=function(event){try{eval(event.data)}catch(err){puts("Error: "+err.message)}postMessage("**")};addEventListener("message",foo,!1);