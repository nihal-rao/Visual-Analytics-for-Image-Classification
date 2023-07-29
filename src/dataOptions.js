const options = [
	{
		dataset: "CIFAR-10",
		model: "ResNet-50",
		cluster_filepath:
			"/data/cifar10/clusters/cifar10_resnet50.json",
		class_cluster_filepath:
			"/data/cifar10/clusters/cifar10_resnet50_classes.json",
		image_filepath:
			"/data/cifar10/images",
	},
	{
		dataset: "CIFAR-100",
		model: "ResNet-50",
		cluster_filepath:
			"/data/cifar100/clusters/cifar100_resnet50.json",
		class_cluster_filepath:
			"/data/cifar100/clusters/cifar100_resnet50_classes.json",
		image_filepath:
			"/data/cifar100/images",
	},
	{
		dataset: "Caltech256",
		model: "ResNet-50",
		cluster_filepath:
			"/data/caltech256/caltech256_features_15.json",
		class_cluster_filepath:
			"/data/caltech256/caltech256_classes_15.json",
		image_filepath:
			"/data",
	}
];

export default options;
