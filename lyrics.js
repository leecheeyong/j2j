const text = `
我们好好珍惜 
好好感受趁现在的时光 
还能无所顾忌的嚷 
也许童话里的情节 
是梦境里的幻想 
在无人烟的地方 
放肆 
放肆 
当坏小孩的模样 
推开推开 
梦里面的那扇窗 
蝴蝶飞过了海洋 
我们好好珍惜好好感受 趁现在的时光 
还能无所顾忌的嚷 
也许童话里的情节 
是梦境里的幻想 
带著光 
跟我飞翔 
感受风的速度在耳边 
呼啸远方 
一束一束光透过了天窗 
一次一次想触摸那光芒 
尝试去实践勇敢地去想 
去到任何想要去的地方 
一个一个梦写在日记上 
一点一点靠近诺贝尔奖 
只要你敢想就算没收获成长 
`;

const lyrics = [];
text.split('\n').forEach((e) => {
    lyrics.push({ text: e, duration: 5000 });
});
