import React, { useEffect, useState, FormEvent } from "react";
import { BaseLayout } from "../src/components/baselayout";
import { useDispatch, useSelector } from "react-redux";
import fetchPosts from "../src/redux/dispatchers/blog/fetchPosts";
import { searchPosts } from "../src/redux/dispatchers/blog/searchPosts";
import Spinner from "../src/components/spinner";
import { Post } from "../src/redux/types";
import PostLink from "../src/components/postLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNavComponent from "../src/components/sidenav";
import { Button } from "../src/components/button";
import { NextSeo } from "next-seo";

export default function Blog() {
  const dispatch = useDispatch();
  const { pending, posts, searchedPosts, error } = useSelector(
    (state) => state.postsReducer
  );
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
    setSearched(false);
  }, []);

  const handleSearch = (e: any) => {
    if (query.length <= 0) return;

    e.preventDefault();
    dispatch(searchPosts(query));
    setSearched(true);
  };

  enum Categories {
    LIFE = 0,
    TECHNOLOGY = 1,
    TUTORIAL = 2,
    ALL = 3,
  }

  const handleCategories = (category: number) => {
    switch (category) {
      case Categories.LIFE:
        dispatch(searchPosts("LIFE"));
        setSearched(true);
        break;
      case Categories.TECHNOLOGY:
        dispatch(searchPosts("TECHNOLOGY"));
        setSearched(true);
        break;
      case Categories.TUTORIAL:
        dispatch(searchPosts("TUTORIAL"));
        setSearched(true);
        break;
      default:
        break;
    }
  };

  return (
    <BaseLayout title="Gabriel Kaszewski - Blog">
      <NextSeo
        title="Gabriel Kaszewski - Blog"
        description="Gabriel Kaszewski's blog"
        openGraph={{
          title: "Gabriel Kaszewski - Blog",
          url: `https://gabrielkaszewski.pl/blog/`,
          description: "Gabriel Kaszewski's blog",
          site_name: "Gabriel Kaszewski - Blog",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <span className="m-12 md:m-8" />
      <div className="flex gap-2 items-center">
        <SideNavComponent>
          <h3>Categories</h3>
          <div className="flex flex-col m-4 gap-4">
            <Button
              callback={() => {
                handleCategories(Categories.LIFE);
              }}
            >
              Life
            </Button>
            <Button
              callback={() => {
                handleCategories(Categories.TECHNOLOGY);
              }}
            >
              Technology
            </Button>
            <Button
              callback={() => {
                handleCategories(Categories.TUTORIAL);
              }}
            >
              Tutorials
            </Button>
          </div>
        </SideNavComponent>
        {searched && (
          <button
            onClick={() => {
              setSearched(false);
              setQuery("");
            }}
          >
            <FontAwesomeIcon icon={["fas", "arrow-left"]} />
          </button>
        )}
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            className="shadow-xl bg-gray-700 p-1 border border-gray-800 rounded"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="Search..."
          />
        </form>
        <button onClick={handleSearch}>
          <FontAwesomeIcon className="" icon={["fas", "search"]} />
        </button>
      </div>
      <h1 className="fontb-bold text-5xl">Posts</h1>
      <Spinner open={pending} />
      {posts.length > 0 ? null : <p>No posts here yet 🤪</p>}
      {searched
        ? searchedPosts.map((post: Post) => {
            return <PostLink key={post.title} data={post} />;
          })
        : posts.map((post: Post) => {
            return <PostLink key={post.title} data={post} />;
          })}
      {error && (
        <p className="text-red-600 text-xl font-bold">
          Failed fetching posts 😔
        </p>
      )}
    </BaseLayout>
  );
}
