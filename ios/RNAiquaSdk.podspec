
Pod::Spec.new do |s|
  s.name         = "RNAiquaSdk"
  s.version      = "1.1.1"
  s.summary      = "RNAiquaSdk"
  s.description  = <<-DESC
                  RNAiquaSdk
                   DESC
  s.homepage     = ""
  # s.license      = "MIT"
  s.license      = { :type => "MIT", :file => "LICENSE" }
  s.author             = { "author" => "APPIER" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/author/RNAiquaSdk.git", :tag => "master" }
  s.source_files  = "RNAiquaSdk/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end
