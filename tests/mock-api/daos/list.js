module.exports = {
  all: [{"id":1863,"alertDataId":90,"createTime":1551433677000,"status":"RECOVERED","value":10909,"alertName":"物理机宕机","alertExpr":"up{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",exporter_name=\"node-exporter\",tenant=\"desktop\"} == 0","tenant":"desktop","instance":"10.142.90.83","fingerPrint":"800E7BE5A69380AA77F8EBAA3298C87C","alertStrategyId":10004,"alertStrategyRuleId":10052,"alertLevel":"CRITICAL","alertType":"THRESHOLD","ruleSnapshot":"up{exporter_name=\"node-exporter\"} == 0","fromTemplateId":"1","fromTemplateName":"物理机","durationTime":null,"dataCenterCode":"DATACENTER-NEIMENG"},{"id":1862,"alertDataId":29,"createTime":1551433657000,"status":"RECOVERED","value":null,"alertName":"CPU使用率过高","alertExpr":"((count by(ip_addr) (count by(ip_addr, cpu) (node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",tenant=\"desktop\"})) - avg by(ip_addr) (sum by(ip_addr, mode) (irate(node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",mode=\"idle\",tenant=\"desktop\"}[5m])))) * 100) / count by(ip_addr) (count by(ip_addr, cpu) (node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",tenant=\"desktop\"})) > 10","tenant":"desktop","instance":"10.142.90.83","fingerPrint":"86CFD9ED8C11B2AF2B0ACB886DF40216","alertStrategyId":10004,"alertStrategyRuleId":10053,"alertLevel":"CRITICAL","alertType":"THRESHOLD","ruleSnapshot":"((count by(ip_addr) (count by(ip_addr, cpu) (node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",tenant=\"desktop\"})) - avg by(ip_addr) (sum by(ip_addr, mode) (irate(node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",mode=\"idle\",tenant=\"desktop\"}[5m])))) * 100) / count by(ip_addr) (count by(ip_addr, cpu) (node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",tenant=\"desktop\"})) > 5","fromTemplateId":"1","fromTemplateName":"物理机","durationTime":null,"dataCenterCode":"DATACENTER-NEIMENG"},{"id":1861,"alertDataId":34,"createTime":1551433657000,"status":"RECOVERED","value":null,"alertName":"磁盘使用率过高","alertExpr":"100 - ((node_filesystem_avail_bytes{fstype!=\"rootfs\",mountpoint=\"/\"} * 100) / node_filesystem_size_bytes{fstype!=\"rootfs\",mountpoint=\"/\"}) > 10","tenant":"desktop","instance":"10.142.90.83","fingerPrint":"82E053C98B2BA7C081C0A35B2E5DA31A","alertStrategyId":10004,"alertStrategyRuleId":10055,"alertLevel":"CRITICAL","alertType":"THRESHOLD","ruleSnapshot":"100 - ((node_filesystem_avail_bytes{fstype!=\"rootfs\",mountpoint=\"/\"} * 100) / node_filesystem_size_bytes{fstype!=\"rootfs\",mountpoint=\"/\"}) > 5","fromTemplateId":"1","fromTemplateName":"物理机","durationTime":null,"dataCenterCode":"DATACENTER-NEIMENG"},{"id":1860,"alertDataId":81,"createTime":1551433657000,"status":"RECOVERED","value":null,"alertName":"内存使用率过高","alertExpr":"100 - ((node_memory_MemAvailable_bytes * 100) / node_memory_MemTotal_bytes) > 5","tenant":"desktop","instance":"10.142.90.83","fingerPrint":"083E4695411DF628B1FCBFC19795F2FC","alertStrategyId":10004,"alertStrategyRuleId":10054,"alertLevel":"CRITICAL","alertType":"THRESHOLD","ruleSnapshot":"100 - ((node_memory_MemAvailable_bytes * 100) / node_memory_MemTotal_bytes) > 5","fromTemplateId":"1","fromTemplateName":"物理机","durationTime":null,"dataCenterCode":"DATACENTER-NEIMENG"},{"id":1858,"alertDataId":23,"createTime":1551411926000,"status":"RECOVERED","value":null,"alertName":"Springboot应用不可用","alertExpr":"up{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",exporter_name=\"spring-boot\",tenant=\"desktop\"} == 0","tenant":"desktop","instance":"10.142.90.90","fingerPrint":"EC9E5CC0FD3F8F500BFBFEE06CDCA389","alertStrategyId":10002,"alertStrategyRuleId":10049,"alertLevel":"CRITICAL","alertType":null,"ruleSnapshot":"up{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",exporter_name=\"spring-boot\",tenant=\"desktop\"} == 0","fromTemplateId":"3","fromTemplateName":"应用(SpringBoot)","durationTime":null,"dataCenterCode":"DATACENTER-NEIMENG"},{"id":1857,"alertDataId":23,"createTime":1551411916000,"status":"FIRING","value":0.0,"alertName":"Springboot应用不可用","alertExpr":"up{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",exporter_name=\"spring-boot\",tenant=\"desktop\"} == 0","tenant":"desktop","instance":"10.142.90.90","fingerPrint":"EC9E5CC0FD3F8F500BFBFEE06CDCA389","alertStrategyId":10002,"alertStrategyRuleId":10049,"alertLevel":"CRITICAL","alertType":null,"ruleSnapshot":"up{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",exporter_name=\"spring-boot\",tenant=\"desktop\"} == 0","fromTemplateId":"3","fromTemplateName":"应用(SpringBoot)","durationTime":null,"dataCenterCode":"DATACENTER-NEIMENG"},{"id":1856,"alertDataId":30,"createTime":1551406186000,"status":"FIRING","value":22.19062499585561,"alertName":"CPU使用率过高","alertExpr":"((count by(ip_addr) (count by(ip_addr, cpu) (node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",tenant=\"desktop\"})) - avg by(ip_addr) (sum by(ip_addr, mode) (irate(node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",mode=\"idle\",tenant=\"desktop\"}[5m])))) * 100) / count by(ip_addr) (count by(ip_addr, cpu) (node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",tenant=\"desktop\"})) > 10","tenant":"desktop","instance":"10.142.90.89","fingerPrint":"714DD803E78DD207DAEDCFF918CD087D","alertStrategyId":10004,"alertStrategyRuleId":10053,"alertLevel":"CRITICAL","alertType":"THRESHOLD","ruleSnapshot":"((count by(ip_addr) (count by(ip_addr, cpu) (node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",tenant=\"desktop\"})) - avg by(ip_addr) (sum by(ip_addr, mode) (irate(node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",mode=\"idle\",tenant=\"desktop\"}[5m])))) * 100) / count by(ip_addr) (count by(ip_addr, cpu) (node_cpu_seconds_total{_alert_disabled!=\"true\",data_center_code=\"DATACENTER-NEIMENG\",tenant=\"desktop\"})) > 5","fromTemplateId":"1","fromTemplateName":"物理机","durationTime":null,"dataCenterCode":"DATACENTER-NEIMENG"},{"id":1855,"alertDataId":49,"createTime":1551406186000,"status":"FIRING","value":26.137584739608315,"alertName":"磁盘使用率过高","alertExpr":"100 - ((node_filesystem_avail_bytes{fstype!=\"rootfs\",mountpoint=\"/\"} * 100) / node_filesystem_size_bytes{fstype!=\"rootfs\",mountpoint=\"/\"}) > 10","tenant":"desktop","instance":"10.142.90.89","fingerPrint":"C4F95A22E2586481BBD79AAFC5232AC4","alertStrategyId":10004,"alertStrategyRuleId":10055,"alertLevel":"CRITICAL","alertType":"THRESHOLD","ruleSnapshot":"100 - ((node_filesystem_avail_bytes{fstype!=\"rootfs\",mountpoint=\"/\"} * 100) / node_filesystem_size_bytes{fstype!=\"rootfs\",mountpoint=\"/\"}) > 5","fromTemplateId":"1","fromTemplateName":"物理机","durationTime":null,"dataCenterCode":"DATACENTER-NEIMENG"},{"id":1854,"alertDataId":82,"createTime":1551406186000,"status":"FIRING","value":68.65672512400414,"alertName":"内存使用率过高","alertExpr":"100 - ((node_memory_MemAvailable_bytes * 100) / node_memory_MemTotal_bytes) > 5","tenant":"desktop","instance":"10.142.90.89","fingerPrint":"29A311FAF2C28C1E87918B569FB50E43","alertStrategyId":10004,"alertStrategyRuleId":10054,"alertLevel":"CRITICAL","alertType":"THRESHOLD","ruleSnapshot":"100 - ((node_memory_MemAvailable_bytes * 100) / node_memory_MemTotal_bytes) > 5","fromTemplateId":"1","fromTemplateName":"物理机","durationTime":null,"dataCenterCode":"DATACENTER-NEIMENG"},{"id":1853,"alertDataId":82,"createTime":1551405926000,"status":"RECOVERED","value":null,"alertName":"内存使用率过高","alertExpr":"100 - ((node_memory_MemAvailable_bytes * 100) / node_memory_MemTotal_bytes) > 5","tenant":"desktop","instance":"10.142.90.89","fingerPrint":"29A311FAF2C28C1E87918B569FB50E43","alertStrategyId":10004,"alertStrategyRuleId":10054,"alertLevel":"CRITICAL","alertType":"THRESHOLD","ruleSnapshot":"100 - ((node_memory_MemAvailable_bytes * 100) / node_memory_MemTotal_bytes) > 5","fromTemplateId":"1","fromTemplateName":"物理机","durationTime":null,"dataCenterCode":"DATACENTER-NEIMENG"}],
  findAll () {
    return this.all;
  }
};value
