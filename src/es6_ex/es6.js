export  function iteratorex(){
            let arr1=["a1","a2","a3","a4"];
            let arrIt=arr1[Symbol.iterator]();

            console.log("arrsize:"+arr1.length); 
            //console.log("arrsize:"+arr1.size); 
            console.log("arrit:"+arrIt.next());
            console.log("arritvalue:"+arrIt.next().value );



        };

 export function mapex(){
        var map1=new Map([["webk","webname"],["url","www.vvv.cn"]]);
        var objkey1={};
        var objkey2={};
        map1.set(objkey1,"objk1");
        map1.set(objkey2,"objk2");
        console.log(map1.get('webk'));

        map1.forEach(function(value,key){
          console.log("key:"+key+",value:"+value);
        })

        for(let elem of map1){
          console.log(elem);
        }

        for(let elem of map1.keys()){
          console.log("k1："+elem);
        }
        var keyiterator=map1.keys();
        //console.log(keyiterator);
        console.log("k:"+keyiterator.next().value);

        var valueiterator=map1.values();
        console.log(valueiterator);

      }

      function setex(){

        var nset=new Set([1,2,3,4,2,8,4]);
        for(var elem of nset){
          console.log(elem)
        }
        
        var mset=new Set();
        [1,2,3,4,2,8,4].map(function(elem){
            mset.add(elem);
            })

        mset.forEach(function(value){
            console.log("mset:"+value);
        })

        var arr=[...nset];
        console.log("arr:"+arr);

        let a=new Set([1,2,3]);
        let b=new Set([4,2,3]);
        let uniset=new Set([...a,...b]);
        console.log("uniset:"+[...uniset]);

        let intersect=[...a].filter(function(elem){return b.has(elem);});
        console.log("intersect:"+[...intersect]);

        let diff=[...a].filter(function(elem){return !b.has(elem);});
        console.log("diff:"+[...diff]);

        var wset= new WeakSet();
        let aobj={a:'aa'};
        let bobj=new String("bb");
        let cobj=new Number(5);
        wset.add(aobj);
        wset.add(bobj);
        wset.add(cobj);
        
        console.log("wset.has(aobj):"+wset.has(aobj));

      }
