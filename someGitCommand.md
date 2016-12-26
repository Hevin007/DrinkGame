同步模式是不是应该是酱紫的呢？？？？？

1. 先把远程master分支pull到自己分支上：git pull origin master
   报错：fatal: Couldn't find remote ref –allow-unrelated-histories
   解决办法：后面加上--allow-unrelated-histories参数即可，如下：
            git pull origin master  --allow-unrelated-histories

2. pull下来后可能会存在一些冲突，把冲突解决

3. 在自己分支上开始工作，完成之后将自己新加的东西提交合并到master分支

4. 另外一个人开发时先同步一下master上的东西，重复2-3步即可

