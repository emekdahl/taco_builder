# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

2.times do |i|
    User.create(email: "user-#{i+1}@example.com", password: "password", password_confirmation: "password")
end

User.all.each do |u|
    10.times do |i|
        u.tacos.create(title: "Taco #{i+1} for #{u.email}", base: "Base #{i+1}", filling: "Filling #{i+1}", sauce: "Sauce #{i+1}", garnish: "Garnish #{i+1}",)
    end
end