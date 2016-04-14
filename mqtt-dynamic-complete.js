module.exports = function(RED) {
    function MQTTDynamicComplete(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            if(msg.mqttHandleMessageComplete){
                msg.mqttHandleMessageComplete()
            }
            node.send(msg);
        });
    }
    RED.nodes.registerType("mqtt-dynamic complete",MQTTDynamicComplete);
}