import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BlankLayout from "../layouts/BlankLayout";

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

//react 优化 路由懒加载 先存放不加载lazy  需要时拿出来Suspense 
//可 快速打开页面 (放冰箱lazy,提前解冻Suspense) 
//懒加载
const RecommendComponent = lazy(() => import("../application/Recommend/"));
const SingersComponent = lazy(() => import("../application/Singers/"));
const RankComponent = lazy(() => import("../application/Rank/"));
const AlbumComponent = lazy(() => import("../application/Album/"));
const SingerComponent = lazy(() => import("./../application/Singer/"));
const SearchComponent = lazy(() => import("./../application/Search/"));

export default [
    {
        //空白
        component: BlankLayout,
        routes: [
            {
                //默认home路由布局
                path: "/",
                component: HomeLayout,
                routes: [
                    {
                        path: "/",
                        //精准匹配
                        exact: true,
                        //重定向 不能返回上一级
                        render: () => <Redirect to={"/recommend"} />
                    },
                    {
                        //5个同级路由
                        //推荐页面
                        path: "./recommend",
                        component: SuspenseComponent(RecommendComponent),
                        routes: [
                            {
                                path: "/recommend/:id",
                                component: SuspenseComponent(AlbumComponent)
                            }
                        ]
                    },
                    {
                        //歌手页面
                        path: "/singers",
                        component: SuspenseComponent(SingersComponent),
                        key: "singers",
                        routes: [
                            {
                                path: "/singers/:id",
                                component: SuspenseComponent(SingerComponent)
                            }
                        ]
                    },
                    {
                        //排行榜页面
                        path: "/rank/",
                        component: SuspenseComponent(RankComponent),
                        key: "rank",
                        routes: [
                            {
                                path: "/rank/:id",
                                component: SuspenseComponent(AlbumComponent)
                            }
                        ]
                    },
                    {
                        //专辑
                        path: "/album/:id",
                        exact: true,
                        key: "album",
                        component: SuspenseComponent(AlbumComponent)
                    },
                    {
                        //搜索
                        path: "/search",
                        exact: true,
                        key: "search",
                        component: SuspenseComponent(SearchComponent)
                    }
                ]
            }
        ]
    }
]