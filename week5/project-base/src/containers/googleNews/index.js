import React from 'react';
import { FlatList } from 'react-native';

import { getNews } from './news';
import Article from './Article';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { articles: [], refreshing: true, hasErrored: false, lastPageReached: false };
		this.fetchNews = this.fetchNews.bind(this);
	}
	// Called after a component is mounted
	componentDidMount() {
		this.fetchNews();
	}

	fetchNews() {
		try {
			getNews()
				.then((articles) => {
					console.log(articles);
					this.setState({ articles, refreshing: false });
				})
				.catch(() => this.setState({ refreshing: false }));
		} catch (error) {
			this.setState({ hasErrored: true });
		}
	}

	handleRefresh() {
		this.setState(
			{
				refreshing: true,
			},
			() => this.fetchNews()
		);
	}

	render() {
		return (
			<FlatList
				data={this.state.articles}
				renderItem={({ item }) => <Article article={item} />}
				keyExtractor={(item) => item.url}
				refreshing={this.state.refreshing}
				onRefresh={this.handleRefresh.bind(this)}
			/>
		);
	}
}
