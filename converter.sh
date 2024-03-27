sudo apt-get update
sudo apt-get install libfuse2
wget -O ./mayo.AppImage https://github.com/fougue/mayo/releases/download/v0.8.0/Mayo-0.8.0-x86_64.AppImage
chmod a+x mayo.AppImage

./mayo.AppImage -s $1 $2 -e $3