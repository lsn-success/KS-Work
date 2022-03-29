import Mock from 'mockjs'

Mock.setup({ timeout: "1000" });

const obj = {

}

var data = Mock.mock(new RegExp('/list'), (option: any) => {
  const { url } = option;
  const param = url.split('?')[1]
  const arr = param.split(':');
  const paramArray:any = [];
  arr.forEach(element => {
    let a = element.split('=');
    paramArray.push({'key':a[0],'value':a[1]})
  });
  const pageData = Mock.mock({
    'data|4': [{
      'pageNumber|+1': 0,
      'total': 40,
      'data|10': [{
        'id|+1': 0,
        'picurl': '@image',
        'name': '@cname',
        'price': '@float(0,1000,0,1)',
        'originPrice|0-1000': 1,
        'sellNum': '@float(0,5,0,1)'
      }]
    }
    ]
  })

  return pageData.data[parseInt(paramArray[0].value)]
})
// 输出结果


export default data;