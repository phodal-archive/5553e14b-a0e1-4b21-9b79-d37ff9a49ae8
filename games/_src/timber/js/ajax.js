function AJAX(config) {
    if (!(this instanceof AJAX)) {
        return new AJAX(config);
    }
    this._xhr = new XMLHttpRequest();
    this._config = this.extendOptions(config);
    this._assignEvents();
    this._open();
    this._assignUserHeaders();
    this._beforeSend();
}
AJAX.prototype.extendOptions = function (config) {
    var defaultConfig = JSON.parse(JSON.stringify(this._defaultConfig));
    for (var key in defaultConfig) {
        if (key in config) {
            defaultConfig[key] = config[key];
        }
    }
    return defaultConfig;
}
AJAX.prototype._assignEvents = function () {
    this._xhr.addEventListener("readystatechange", this._handleResponse.bind(this), false);
    this._xhr.addEventListener("abort", this._handleError.bind(this), false);
    this._xhr.addEventListener("error", this._handleError.bind(this), false);
    this._xhr.addEventListener("timeout", this._handleError.bind(this), false);
}
AJAX.prototype._assignUserHeaders = function () {
    if (Object.keys(this._config.headers).length) {
        for (var key in this._config.headers) {
            this._xhr.setRequestHeader(key, this._config.headers[key]);
        }
    }
}
AJAX.prototype._open = function () {
    this._xhr.open(this._config.type, this._config.url, this._config.options.async, this._config.options.username, this._config.options.password)
    this._xhr.timeout = this._config.options.timeout;
}
AJAX.prototype._beforeSend = function () {
    var data = null,
        isData = Object.keys(this._config.data).length > 0;
    if (this._config.type.toUpperCase() === "POST" && isData) {
        data = this._serializeFormData(this._config.data);
    } else if (this._config.type.toUpperCase() === "GET" && isData) {
        data = this._serializeData(this._config.data);
    }
    this._open();
    this._assignUserHeaders();
    this._send(data);
}
AJAX.prototype._send = function (data) {
    this._xhr.send(data);
}
AJAX.prototype._handleResponse = function (e) {
    if (this._xhr.readyState === 4 && this._xhr.status === 200) {
        console.log("readyState === 4 && this._xhr.status === 200");
        this._config.success(JSON.parse(e.currentTarget.response), this._xhr);
    }
    else if (this._xhr.status === 404)
    {
        this._config.failure(this._xhr);
    }
}
AJAX.prototype._handleError = function (e) {
    console.log("npot readyState === 4 && this._xhr.status === 200");
    this._config.failure(this._xhr);
}
AJAX.prototype._serializeFormData = function (data) {
    var serialized = new FormData();
    for (var key in data) {
        serialized.append(key, data[key])
    }
    return serialized;
}
AJAX.prototype._serializeData = function (data) {
    var serialized = "";
    for (var key in data) {
        serialized += key + "=" + data[key] + "&";
    }
    console.log(serialized.slice(0, serialized.length - 1));
}
AJAX.prototype._defaultConfig = {
    type: "GET",
    url: window.location.href,
    data: {},
    options: {
        async: true,
        timeout: 0,
        username: null,
        password: null
    },
    headers: {},
    success: {},
    failure: {}
}
function ajaxData(type, url, data, headers, callback, failCallback) {
    return AJAX({
        type: type,
        url: url,
        data: data,
        headers: headers,
        success: function (response, xhr) {
            console.log(response);
            callback(response);
        },
        failure: function (xhr) {
            failCallback();
        }
    })
}