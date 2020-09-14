// 路由的本质是什么？
// 路由级别的页面
// 二级路由 
// /path Component 放在相应的地方<Route />
// 嵌套

//lazy react 内置组件
import React, { lazy, Suspense, Component } from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from '../layouts/HomeLayout';
//react 优化 路由懒加载 先存放不加载lazy  需要时拿出来Suspense 可 快速打开页面 (放冰箱lazy,提前解冻Suspense) 
// import Recommend from '../application/Recommend/';
const RecommendComponent = lazy(() => import("../application/Recommend/"));
const SingersComponent = lazy(() => import("../application/Singers/"));
const SearchComponent = lazy(() => import("./../application/Search/"));

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}>

      </Component>
    </Suspense>
  )
}


export default [{
  component: BlankLayout,
  routes: [
    {
      path: "/",
      component: HomeLayout,
      routes: [
        {
          path: '/',
          exact: true,
          render: () => <Redirect to={"/recommend"} />
        },
        {
          path: '/recommend',
          component: SuspenseComponent(RecommendComponent)
        },
        {
          path: '/singers',
          component: SuspenseComponent(SingersComponent)
        },
        // {
        //   path: '/rank',
        //   component: RankComponent
        // },
        {
          path: "/search",
          exact: true,
          key: "search",
          component: SuspenseComponent(SearchComponent)
        }
      ]
    }
  ]
}]