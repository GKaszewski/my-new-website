import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseLayout } from "../../src/components/baselayout";
import { Button } from "../../src/components/button";
import { PostEditorSelection } from "../../src/components/posteditorselection";
import PreviewPost from "../../src/components/previewPost";
import SideNavComponent from "../../src/components/sidenav";
import TextArea from "../../src/components/textarea";
import TextField from "../../src/components/textfield";
import fetchDrafts from "../../src/redux/dispatchers/blog/fetchDrafts";
import fetchPosts from "../../src/redux/dispatchers/blog/fetchPosts";
import modifyPost from "../../src/redux/dispatchers/blog/modifyPost";
import uploadDraft from "../../src/redux/dispatchers/blog/uploadDraft";
import uploadPost from "../../src/redux/dispatchers/blog/uploadPost";
import { Post } from "../../src/redux/types";
import {onFileDrop} from "../../src/utils/onFileDrop";
import useUploadedFile from "../../src/utils/hooks/useUploadedFile";

export default function BlogEditorPage() {
	const dispatch = useDispatch();
	const { loggedIn, token } = useSelector((state) => state.authReducer);
	const { drafts, posts } = useSelector((state) => state.postsReducer);
	const { isToggled } = useSelector((state) => state.sidebarReducer);

	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const [category, setCategory] = useState<string>("LIFE");

	const [currentPost, setCurrentPost] = useState<Post | null>();

	useUploadedFile(setContent);

	useEffect(() => {
		dispatch(fetchPosts());
		dispatch(fetchDrafts());
	}, []);

	useEffect(() => {
		dispatch(fetchPosts());
		dispatch(fetchDrafts());
	}, [isToggled]);

	const notAuthenticatedView = () => {
		return (
			<BaseLayout title="Gabriel Kaszewski - Blog Editor">
				<h1 className="text-3xl text-red-500 font-semibold mt-16">
					You are not authenticated.
				</h1>
				<Link href="/login">
					Login
				</Link>
			</BaseLayout>
		);
	};

	if (!loggedIn) return notAuthenticatedView();

	const handlePostChange = (post: Post) => {
		setTitle(post.title);
		setContent(post.content);
		setCategory(post.category);
		setCurrentPost(post);
	};

	const reset = () => {
		setTitle("");
		setContent("");
		setCategory("LIFE");
		setCurrentPost(null);
		dispatch(fetchPosts());
		dispatch(fetchDrafts());
	};

	const saveToDraft = () => {
		if (!currentPost) {
			let newPost: Post = {
				title: title,
				content: content,
				category: category,
				status: 0,
			};
			setCurrentPost(newPost);
			dispatch(uploadDraft(newPost, token));
		} else {
			currentPost.title = title;
			currentPost.content = content;
			currentPost.category = category;
			if (currentPost.status == 1) {
				currentPost.status = 0;
				dispatch(modifyPost(currentPost, token));
			} else dispatch(uploadDraft(currentPost, token));
		}
		reset();
	};

	const publishPost = () => {
		if (!currentPost) {
			let newPost: Post = {
				title: title,
				content: content,
				category: category,
				status: 1,
			};
			setCurrentPost(newPost);
			dispatch(uploadPost(newPost, token));
		} else {
			currentPost.title = title;
			currentPost.content = content;
			currentPost.category = category;
			dispatch(modifyPost(currentPost, token));
		}
		reset();
	};

	return (
		<BaseLayout title="Gabriel Kaszewski - Blog Editor">
			<span className="mt-32 md:mt-16"></span>
			<SideNavComponent>
				<h3 className="font-semibold text-2xl">Drafts</h3>
				<div className="flex flex-col space-y-1 m-2">
					{drafts.map((draft: Post, i) => {
						return (
							<PostEditorSelection
								onClick={() => {
									handlePostChange(draft);
								}}
								key={`${i}-draft`}
								data={draft}
							/>
						);
					})}
				</div>
				<h3 className="font-semibold text-2xl">Posts</h3>
				<div className="flex flex-col space-y-1 m-2">
					{posts.map((post: Post, i) => {
						return (
							<PostEditorSelection
								onClick={() => {
									handlePostChange(post);
								}}
								key={`${i}-post`}
								data={post}
							/>
						);
					})}
				</div>
			</SideNavComponent>
			<div className="flex flex-col gap-2">
				<div className="flex items-center space-x-4">
					<p className="text-lg font-semibold">Title</p>
					<TextField value={title} onChange={setTitle} />
				</div>
				<div className="flex items-center space-x-4">
					<p className="text-lg font-semibold">Category</p>
					<select
						onChange={(e) => setCategory(e.currentTarget.value)}
						value={category}
						className="w-32 h-8 rounded-lg text-gray-800 border-4 focus:border-yellow-400 focus:outline-none"
					>
						<option value="LIFE">Life</option>
						<option value="TECHNOLOGY">Technology</option>
						<option value="TUTORIAL">Tutorial</option>
					</select>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 min-w-full">
				<div
					onDrop={(event) => onFileDrop(event, dispatch, token)}
					className="flex flex-col h-5/6"
				>
					<p className="text-lg font-semibold">Content</p>
					<TextArea value={content} rows={12} onChange={setContent} />
				</div>
				<div className="h-5/6">
					<PreviewPost data={content} />
				</div>
			</div>
			<div className="flex w-full items-center space-x-4">
				<Button callback={reset}>Create new</Button>
				<Button callback={saveToDraft}>Save to draft</Button>
				<Button callback={publishPost}>Publish post</Button>
			</div>
		</BaseLayout>
	);
}
