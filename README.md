# sparkStudy
1、Spark作业的提交：
提交到本地：Spark-submit --class … --master local[2] /path/to/….jar [optional parameter]
提交到standalone集群:Spark-submit --class … --master spark://IP:host --deploy-mode cluster /path/to/….jar [optional parameter]
提交到yarn集群:Spark-submit --class … --master yarn /path/to/….jar [optional parameter]]
涉及其他参数可在命令行输入spark-submit获得参数解释
2、spark应用程序运行机理：
1）资源调度：
Spark（standalone）为典型的Master-slaves结构。应用程序向集群提交主要分为client模式和cluster模式。client应用程序的提交流程描述如下：
首先client将application提交到master,像master注册应用程序信息，如用多少资源，以及配置等，完成driver的注册。此时worker仍不停的向master汇报集群资源情况，driver会将当前的application注册给master。master根据集群资源启动executor。driver分发任务到executor中执行。
cluster模式下master会在workers中启动一个driver。
