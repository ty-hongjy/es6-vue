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

 export  function setex(){

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

export function stes6(){
      let [a,b,c,d]=['aa','bb',77,88];
      //let [a,b,c,d]=['aa','bb',77,88];
      {
      let a=0;
      //alert(a);
      }
      //alert(a);


      let obj=new Object();
      obj.uid=111;
      obj.uname="zs";
      obj.arr=['aa','bb'];
      //let {uname:name,uid:id}=obj;
      let uname,uid,arr,a1,b1;
      //({uname,uid}=obj);
      ({arr:[a1,b1]}=obj);
      //alert(a1);
      //af(obj);
      //setex();
      //mapex();
      //iteratorex();
      //genmain();
      //genmain1();
      genmain2();
    }


export  function* genex(){
          console.log("a1:");
          console.log("a:"+(yield "gena"));
          //yield "gena";
          yield "genb";
          yield "genc";
          yield "gend";
          return "end";

      }

export  function genmain(){
          var g=genex();
          //console.log("a:");
          console.log(g.next());
          console.log(g.next("inject aa"));
          //console.log(g.next("aa").value);
          //console.log(g.next().value);
          //console.log("gena:"+g.next());
          //console.log("genb:"+g.next());

      }

export  function* genex1(num){
          let x=2*(yield num);
          console.log("x="+x);

          let y=yield x*3;

          console.log("y="+y);
          console.log(x,y);

      }

export   function genmain1(){
          var g1=genex1(5);

          console.log(g1.next());
          console.log(g1.next(3));
          console.log(g1.next(3));

      }

export  function genmain2(){

         let y;

 
        y=genex2();
        y.next();
        y.next();
        console.log("end");


	  function* genex2(){
          var func=function(time){
            setTimeout(function(){
                console.log(time," on");
                //y.next();
            },time)
          }
           
           var f1=yield func(3000);
          console.log("f1:",f1);

          var f2=yield func(1000);
          console.log("f2:",f2);
        }
      }

      function af(uname,uid){
        alert(uname);
        }
