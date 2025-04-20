// 定义 GitHub API 的 URL
const apiUrl = 'https://api.github.com/repos/aqiulawrence/aqiulawrence.github.io/contents/downloads';

// 使用 fetch 获取数据
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data[-1]);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });