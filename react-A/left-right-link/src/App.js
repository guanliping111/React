import React, { useState, useEffect, useRef } from 'react';
import './App.css';
// scollintoView 滚动元素进入视窗
const data = {
  tab1: [
    { c: "1-1" },
    { c: "1-2" },
    { c: "1-3" },
    { c: "1-4" },
    { c: "1-5" },
    { c: "1-6" }
  ],
  tab2: [
    { c: "2-1" },
    { c: "2-2" },
    { c: "2-3" },
    { c: "2-4" },
    { c: "2-5" },
    { c: "2-6" }
  ],
  tab3: [
    { c: "3-1" },
    { c: "3-2" },
    { c: "3-3" },
    { c: "3-4" },
    { c: "3-5" },
    { c: "3-6" },
    { c: "3-7" }
  ],
  tab4: [
    { c: "4-1" },
    { c: "4-2" },
    { c: "4-3" },
    { c: "4-4" },
    { c: "4-5" },
    { c: "4-6" },
    { c: "4-7" }
  ]
};

let base = 0, ranges = [];//滚动范围
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabClick = (e) => {
    // console.log(e.target)
    const ltab = e.target.getAttribute('data-ltab');
    const activeIndex = e.target.getAttribute('data-index');
    setTimeout(() => {
      setActiveIndex(parseInt(activeIndex));
    },500)
    // 需要滚动的那个元素.scollintoView
    // console.log(ltab);
    const rtab = document.querySelector(`[data-rtab="${ltab}"]`);
    rtab.scrollIntoView({
      // 平滑滚动
      behavior:'smooth'
    })
  }
  const navs = Object.keys(data);
  const ref = useRef();
  useEffect(() => {
    const tabDetail = ref.current;
    const tabs = tabDetail.querySelectorAll(`[data-rtab]`);
    for( let tab of tabs) {
      let h = tab.getBoundingClientRect().height;
      let newH = base + h;
      ranges.push([base,newH]);
      base = newH;
    }
    function onScroll(e) {
      const scrollTop = tabDetail.scrollTop;
      const index = ranges.findIndex(range => scrollTop >= range[0] && scrollTop < range[1]);
      setActiveIndex(index);
    }
    // console.log(ranges);
    tabDetail.addEventListener('touchstart', ()=> {
      tabDetail.addEventListener('touchmove',onScroll);
    })
    tabDetail.addEventListener('touchend', ()=> {
      tabDetail.removeEventListener('touchmove',onScroll);
    })
  },[])
  return (
    <div className="linkage">
      <nav>
        {
          navs.map((nav, i) => {
            // data-ltab 埋数据
            return (<div key={i} 
              data-ltab={nav} 
              data-index={i}
              onClick={handleTabClick}
              // 业务化
              className={activeIndex === i ? 'active' : ''}
              >{nav}</div>)
          })
        }
      </nav>
      <div className="tab-detail" ref = {ref}>
        {
          navs.map((nav, i) => {
              return(
                <dl key={i} data-rtab={nav}>
                  {/* 这里也埋一个 */}
                  <dt >{nav}</dt>
                  {
                    data[nav].map((con,j) => {
                      return (
                        <dd key={j}>{con.c}</dd>
                      )
                    })
                  }
                </dl>
              )
          })
        }
      </div>
    </div>
  );
}

export default App;
