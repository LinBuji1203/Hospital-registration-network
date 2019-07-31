
var storage = {};

storage.hospital = [
    ['area','level','type','name','address','phone','imgUrl','time'],
    ['朝阳区','三级甲等','卫生部直属医院','首都儿科研究所附属儿童医院','北京市朝阳区雅宝路2号','84305488'],
    ['朝阳区','三级甲等','卫生部直属医院','中日友好医院','北京市朝阳区樱花东路2号','84305488'],
    ['西城区','三级甲等','卫生部直属医院','首都医科大学附属北京友谊医院','北京市西城区永安路95号','84305488'],
    ['朝阳区','三级甲等','卫生部直属医院','首都医科大学附属北京地坛医院B附属','北京市朝阳区樱花东路95号','84305488'],
    ['朝阳区','三级合格','北京区县属医院','空军总医院','北京市西城区永安路95号','84305488'],
    ['海淀区','三级合格','北京区县属医院','航天中心医院（原721医院）','北京市海淀区玉泉路15号','84305488'],
    ['丰台区','三级甲等','北京区县属医院','北京中医药大学东方医院','北京市丰台区方庄芳星园一区6号','84305488'],

    ['丰台区','三级合格','北京区县属医院','北京电力医院','北京市丰台区太平桥西里甲1号','84305488'],
    ['顺义区','三级甲等','北京区县属医院','北京中医医院顺义医院','北京市顺义区站前东街5号','84305488'],
    ['通州区','三级甲等','其它','首都医科大学附属北京潞河医院三级综合医院','北京市通州区新华南路8号','84305488'],
  
];

storage.department = [
    ["hospitalName",['departmentName']],

    ['首都儿科研究所附属儿童医院',['儿科a','儿科b','儿科c']],
    ['中日友好医院',['科室a','科室b','科室c','科室d']],
    ['首都医科大学附属北京友谊医院',['departmentName-0']],
    ['首都医科大学附属北京地坛医院B附属',['departmentName-1']],

    ['空军总医院',['departmentName-2']],
    ['航天中心医院（原721医院）',['departmentName-3']],
    ['北京中医药大学东方医院',['departmentName-4']],
    ['北京电力医院',['departmentName-5']],
    ['北京中医医院顺义医院',['departmentName-6']],
    ['首都医科大学附属北京潞河医院三级综合医院',['departmentName-7']],

];

var AjaxRemoteGetData = {};

AjaxRemoteGetData.getDistinctArea = function(){
    console.log('远程数据获取','getDistinctArea');

    var map = {};
    var arr = ['医院地区'];
    for(i=1,j=storage.hospital.length;i<j;i++){
        var _d = storage.hospital[i][0];
        map[_d]=1;//?
    }
    for(k in map){
        arr.push(k);
    }
    console.log('结果',arr);
    return arr;
}
AjaxRemoteGetData.getLevelByArea = function( area ){
    var map = {};
    var arr = ['医院等级'];
    for(i=1,j=storage.hospital.length; i<j ; i++){

        var _area = storage.hospital[i][0];
        var level = storage.hospital[i][1];
        if(area == _area){
            map[level] = 1;
        }
    }
    for( k in map){
        arr.push(k);
    }
    console.log('结果',arr);
    return arr;
}
AjaxRemoteGetData.getNameByAreaAndLevel = function( area , level ){
    console.log('远程数据获取','getNameByAreaAndLevel','arguments:',arguments);
    var map = {};
    var arr = ['医院名称'];
    for(i=1,j=storage.hospital.length;i<j;i++){
        var _level = storage.hospital[i][1];
        var hosptialName = storage.hospital[i][3];
        var _area=storage.hospital[i][0];
        if(level == _level&&area==_area){
            map[hosptialName] = 1;
        }
    } 
    for( k in map){
        arr.push(k);
    }
    console.log('结果',arr);
    return arr;
}
AjaxRemoteGetData.getDepartmentArrByHosptialName = function( area,level,hospitalName){
    console.log('远程数据获取','getDepartmentArrByHosptialName','arguments:',arguments);
    var map = {};
    var arr = ['科室名称'];
    for(i=1,j=storage.department.length;i<j;i++){
        var _hosptialName = storage.department[i][0];
        
        var _d = storage.department[i][1];
        var _dlen=_d.length;
        for(k=0;k<_dlen;k++)
        {
            if(hospitalName == _hosptialName){
                map[_d[k]] = 1;
            }
        }
        
    } 
    for( k in map){
        arr.push(k);
    }
    console.log('结果',arr);
    return arr;
}
