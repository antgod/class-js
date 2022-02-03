function getInnerText(element) {
	return (typeof element.textContent == "string") ? element.textContent: element.innerText;
}

function setInnerText(element, text) {
	if (typeof element.textContent == "string") {
		element.textContent = text;
	} else {
		element.innerText = text;
	}
}

function contains(refNode, otherNode) {
    if (typeof refNode.contains == "function" && (!client.engine.webkit || client.engine.webkit >= 522)) {
        return refNode.contains(otherNode);
    } else if (typeof refNode.compareDocumentPosition == "function") {
        return !! (refNode.compareDocumentPosition(otherNode) & 16);
    } else {
        var node = otherNode.parentNode;
        do {
            if (node === refNode) {
                return true;
            } else {
                node = node.parentNode;
            }
        } while ( node !== null );
        return false;
    }
}

function removeClass(element, removeClassName) {
	var classNames = element.className.split(/\s+/);
	// 找到要删的类名
	var pos = -1, i, len;
	for (i = 0, len = classNames.length; i < len; i++) {
		if (classNames[i] == removeClassName) {
			pos = i;
			break;
		}
	}
	// 删除类名
	classNames.splice(i, 1);
	// 把剩下的类名拼成字符串并重新设置
	element.className = classNames.join(" ");
}


function outputAttributes(element) {
    var pairs = new Array(),
    attrName,
    attrValue,
    i,
    len;
    for (i = 0, len = element.attributes.length; i < len; i++) {
        attrName = element.attributes[i].nodeName;
        attrValue = element.attributes[i].nodeValue;
        if (element.attributes[i].specified) {
            pairs.push(attrName + "=\"" + attrValue + "\"");
        }
    }
    return pairs.join(" ");
}

function htmlEscape(text){
	return text.replace(/[<>"&]/g, function(match, pos, originalText){
		switch(match){
			case "<":
				return "&lt;";
			case ">":
				return "&gt;";
			case "&":
				return "&amp;";
			case "\"":
				return "&quot;";
		}
	});
}

function hasPrototypeProperty(object, name){
	return !object.hasOwnProperty(name) && (name in object);
}

// 检测插件（在IE 中无效）
function hasPlugin(name){
	name = name.toLowerCase();
	for (var i=0; i < navigator.plugins.length; i++){
		if (navigator. plugins [i].name.toLowerCase().indexOf(name) > -1){
			return true;
		}
	}
	return false;
}

function convertToArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0); //针对非IE 浏览器
    } catch(ex) {
        array = new Array();
        for (var i = 0,
        len = nodes.length; i < len; i++) {
            array.push(nodes[i]);
        }
    }
    return array;
}

/**
 * 继承方法
 */
function deepmix(target,source){
	var args=[].slice.call(arguments),i=1,key,
	ride=typeof args[args.length-1]=="boolean"?args.pop():true;
	if(args.length===1){
		target=!this.window?this:{};
		i=0;
	}

	while((source=args[i++])){
		for(key in source)
			if(ride||(key in target)){
				target[key]=source[key];
			}
	}
}

Date.prototype.format = function(fmt) {
	var o = {
			'M+': this.getMonth() + 1, //月份
			'd+': this.getDate(), //日
			'h+': this.getHours(), //小时
			'm+': this.getMinutes(), //分
			's+': this.getSeconds(), //秒
			'q+': Math.floor((this.getMonth() + 3) / 3), //季度
			'S': this.getMilliseconds() //毫秒
		},
		k;
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
		}
	}
	return fmt;
};

/**
 * 解析url获得参数对象
 */
function getParams() {
    var url = location.search,
        Params = {},
        params = [];

    if (url.indexOf('?') != -1) {
        params = url.substr(1).split('&');
        for (var i = params.length; i--;) {
            var kv = params[i].split('='),
                k = kv[0],
                v = kv[1];

            Params[k] = unescape(v);
        }
    }

    return Params;
}

function mix(r, s) {
    if(!r)r={};
    for ( var k in s) {
        if (s.hasOwnProperty(k)) {
            r[k] = s[k];
        }
    }
}

function isJson(obj){
    var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length
    return isjson;
}

const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));