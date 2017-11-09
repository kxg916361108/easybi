# sparkStudy
1、Spark作业的提交：
提交到本地：Spark-submit --class … --master local[2] /path/to/….jar [optional parameter]
提交到standalone集群:Spark-submit --class … --master spark://IP:host --deploy-mode cluster /path/to/….jar [optional parameter]
提交到yarn集群:Spark-submit --class … --master yarn /path/to/….jar [optional parameter]]
涉及其他参数可在命令行输入spark-submit获得参数解释
2、spark应用程序运行机理：
